import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CourseService {
  constructor(private http: HttpClient) {}

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses')
      .pipe(
        map(res => res['payload']),
        shareReplay()
      );
  }

  saveCourse(id: string, changes: Partial<Course>): Observable<any> {
    return this.http.put(`/api/courses/${id}`, changes)
      .pipe(
        shareReplay()
      );
  }
}
