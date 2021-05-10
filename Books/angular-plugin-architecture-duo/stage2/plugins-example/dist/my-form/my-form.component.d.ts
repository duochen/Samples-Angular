import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
export declare class MyFormComponent implements OnInit {
    private fb;
    form: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
}
