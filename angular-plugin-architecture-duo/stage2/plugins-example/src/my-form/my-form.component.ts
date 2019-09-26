import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Extension } from 'plugins-core';

@Extension('my-form', [])
@Component({
    selector: 'my-form',
    templateUrl: './my-form.component.html',
    providers: [ FormBuilder ]    
})
export class MyFormComponent implements OnInit {
    form : FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            name: fb.group({
                first: ['Nancy', Validators.minLength(2)],
                last: 'Drew'
            }),
            email: ''
        });
    }
    
    ngOnInit() {
        console.log('My Form Init');
        console.log('FB:', this.fb);
        console.log('Form', this.form);
    }

    onSubmit() {
        console.log("Submit button is clicked!");
    }    
}