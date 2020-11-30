import { HttpClient } from '@angular/common/http';
import { MessagesService } from './../messages/messages.service';
import { LoadingService } from './../loading/loading.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { Course, sortCoursesBySeqNo } from "../model/course";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CoursesStore {
  private subject = new BehaviorSubject<Course[]>([]);
  courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
              private http: HttpClient,
              private loading: LoadingService,
              private messages: MessagesService) {
    this.loadAllCourses();
  }

  private loadAllCourses() {
    const loadedCourses$ = this.http.get<Course[]>('/api/courses')
      .pipe(
        map(response => response['payload']),
        catchError(err => {
          const message = 'Could not load courses';
          this.messages.showErrors(message);
          console.log(message, err);
          return throwError(err);
        }),
        tap(courses => this.subject.next(courses))
      );

    this.loading.showLoaderUntilCompleted(loadedCourses$).subscribe();
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    // Convert subject to Course array
    const courses: Course[] = this.subject.getValue();

    // Find the index in the array based on the course id
    const index = courses.findIndex(course => course.id === courseId);

    // Create a new course with the changes
    const newCourse: Course = {
      ...courses[index],
      ...changes
    }

    // Create a copy of courses
    const newCourses = courses.slice(0);

    // Replace the old course with the new course
    newCourses[index] = newCourse;

    // Ingest the new courses into subject
    this.subject.next(newCourses);

    // Send the changes to the server
    return this.http.put(`/api/courses/${courseId}`, changes)
      .pipe(
        catchError(err => {
          const message = 'Could not save course';
          this.messages.showErrors(message);
          console.log(message, err);
          return throwError(err);
        }),
        shareReplay()
      );
  }

  filerByCategory(category: string): Observable<Course[]> {
    return this.courses$
      .pipe(
        map(courses => courses.filter(
            course => course.category === category)
            .sort(sortCoursesBySeqNo)
        ));
  }
}
