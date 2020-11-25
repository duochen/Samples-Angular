import { MessagesService } from './../messages/messages.service';
import { CourseService } from './../services/courses.service';
import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { LoadingService } from '../loading/loading.service';
import { MessagesService } from '../messages/messages.service';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    providers: [
      LoadingService,
      MessagesService
    ]
})
export class CourseDialogComponent implements AfterViewInit {

    form: FormGroup;

    course:Course;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course: Course,
        private courseService: CourseService,
        private loadingService: LoadingService,
        private MessagesService: MessagesService
        ) {

        this.course = course;

        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });
    }

    ngAfterViewInit() {

    }

    save() {

      const changes = this.form.value;
      this.courseService.saveCourse(this.course.id, changes)
        .pipe(
          catchError(err => {
            const message = 'Could not save course';
            console.log(err, message);
            this.MessagesService.showErrors(message);
            return throwError(err);
          })
        )
        .subscribe(
          val => {
            this.dialogRef.close(val);
          }
        );
    }

    close() {
        this.dialogRef.close();
    }
}
