import { Lesson } from './../model/lesson';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonComponent  {
  @Input()
  lesson: Lesson

  constructor() {}

  ngOnInit() {

  }
}
