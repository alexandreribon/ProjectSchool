import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { debounceTime, take } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courseList: Course[] = [];

  public categories: Category[] = Object.values(Category);

  form!: FormGroup;

  totalRegister: number = 0;
  currentPage: number = 1;
  pageSize: number = 4;

  constructor(private courseService: CoursesService,
              private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        if (value) {
          this.getCourses(this.currentPage, this.pageSize, this.f.category.value, this.f.search.value);
        }
      });

    this.getCourses(1, 4, '', '');
  }

  get f(): any {
    return this.form.controls;
  }

  private initForm(): void {
    this.form = this.fb.group({
      category: [''],
      search: ['']
    });
  }

  public getCourses(currentPage: number, pageSize: number,  category: string, search: string): void {
    this.courseService.getAll(currentPage, pageSize, category, search)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.courseList = response.body as Course[];
          let totalCount = response.headers.get('X-Total-Count');
          this.totalRegister = totalCount ? Number(totalCount) : 0;
        }
      });
  }

  public doSearch(): void {
    this.getCourses(this.currentPage, this.pageSize, this.f.category.value, this.f.search.value);
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.getCourses(this.currentPage, this.pageSize, this.f.category.value, this.f.search.value);
  }
}
