import { CoursesStore } from './../services/courses.store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../model/course';
import { Observable} from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(private coursesStore: CoursesStore) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filerByCategory('BEGINNER');
    this.advancedCourses$ = this.coursesStore.filerByCategory('ADVANCED');
  }
}
