/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// pluck
//  get a property of each value
//  to access nested fields use an array of properties in proper order

const { of, from } = require('rxjs');
const { pluck } = require('rxjs/operators');

const friends = [
    { name: 'Alice', birthday: '02/03', address: { state: 'MA' } },
    { name: 'Bob', birthday: '07/04', address: { state: 'PA' } },
    { name: 'Jane', birthday: '10/12', address: { state: 'VA' } }
];

from(friends)
    .pipe(
        pluck('name')
    )
    .subscribe(console.log)

of(...friends)
    .pipe(
        pluck('address', 'state')
    )
    .subscribe(console.log)