import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',   //<courses>
    template: `
        <h2>{{ title }}</h2>
        <button (click)="onSave($event)">Save</button>
        `
})
export class CoursesComponent {
    isActive = false;
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    courses; // = ["course1", "course2", "course3"];
    colSpan = 2;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {, 
        console.log("Button was clicked", $event);
    }
}