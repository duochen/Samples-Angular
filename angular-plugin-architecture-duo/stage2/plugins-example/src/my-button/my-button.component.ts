import { Component, OnInit, NgModule } from '@angular/core';
import { Extension } from 'plugins-core';

@Extension('my-button', [])
@Component({
    selector: 'my-button',
    template: `<button>Hello Button</button>`
})
export class MyButtonComponent implements OnInit {

    ngOnInit() {
        console.log('My Button Init');
    }

}