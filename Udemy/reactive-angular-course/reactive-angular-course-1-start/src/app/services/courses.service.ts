import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CourseService {
  constructor(private http: HttpClient) {}

  loadCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseId}`)
      .pipe(
        shareReplay()
      );
  }

  loadLessonsByCourseId(courseId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>('/api/lessons', {
      params: {
        pageSize: '10000',
        couseId: courseId.toString()
      }
    })
    .pipe(
      map(res => res['payload']),
      shareReplay()
    )
  }

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

  searchLessons(search: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>('/api/lessons', {
      params: {
        filter: search,
        pageSize: '100'
      }
    })
    .pipe(
      map(res => res['payload']),
      shareReplay()
    )
  }
}