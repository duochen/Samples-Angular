import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',   //<courses>
    template: `
        <h2>{{ title }}</h2>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> <br/>
        <div (click)="onDivClicked">
            <button (click)="onSave($event)">Save</button>
        </div>
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating }} <br/>
        {{ course.price }} <br/>
        {{ course.releaseDate }} 
        `
})
export class CoursesComponent {
    email = "me@example.com";
    isActive = false;
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    courses; // = ["course1", "course2", "course3"];
    colSpan = 2;

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onKeyUp() {
        console.log(this.email);
    }
}