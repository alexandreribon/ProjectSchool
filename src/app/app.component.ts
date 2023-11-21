import { Component, Inject, OnInit, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter, fromEvent, map } from 'rxjs';
import { MenuItem } from './shared/models/menu-item';
import { menuItens } from './shared/models/menu';
import { NavigationEnd, Router } from '@angular/router';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private breakpointObserver: BreakpointObserver

  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;

  public itensMenu: MenuItem[] = menuItens;

  public menuName = '';

  constructor(private route: Router) {
    this.breakpointObserver = inject(BreakpointObserver);
   }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe({
        next: (value: number) => this.determineHeader(value)
      });

    this.route.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        let moduleName = event.url.split('/')[1];
        if (moduleName != 'users') {
          this.menuName = this.itensMenu.filter((item: MenuItem) => item.link == `/${moduleName}`)[0].label;
        } else {
          this.menuName = 'Usuário';
        }
      });
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
        .observe(['(max-width: 800px)'])
        .subscribe((res) => this.isSmallScreen = res.matches);
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
