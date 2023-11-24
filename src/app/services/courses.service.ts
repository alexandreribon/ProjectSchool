import { HttpClient, HttpResponse } from '@angular/common/http';
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

  public getAll(currentPage: number, pageSize: number,
                category: string, search: string) : Observable<HttpResponse<any>> {

    let url = `${this.baseURL}?_page=${currentPage}&_limit=${pageSize}`;

    if (category) {
      url = `${url}&category=${category}`
    }

    if (search) {
      url = `${url}&q=${search}`
    }

    return this.http.get(url, {observe: 'response'});
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
