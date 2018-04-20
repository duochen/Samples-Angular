import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',   //<courses>
    template: `
        <h2>{{ title }}</h2>
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    courses; // = ["course1", "course2", "course3"];
    colSpan = 2;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}