import { Component, OnInit, NgModule } from '@angular/core';
import { Extension } from 'plugins-core';

@Extension('my-button', [])
@Component({
    selector: 'my-button',
    templateUrl: './my-button.component.html'
})
export class MyButtonComponent implements OnInit {

    ngOnInit() {
        console.log('My Button Init');
    }

}