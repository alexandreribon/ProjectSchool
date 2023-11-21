import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '@app/shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseURL = `${environment.apiURL}courses`;

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}`);
  }

  public getById(id: number) : Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`);
  }

  public post(course: Course) : Observable<Course[]> {
    return this.http.post<Course[]>(this.baseURL, course);
  }

  public put(id: number, course: Course) : Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course);
  }

  public delete(id: number) : Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`)
  }
}
