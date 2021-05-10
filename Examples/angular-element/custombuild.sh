#!/bin/sh
ng build angular-element --prod --output-hashing=none && cat
dist/angular-element/runtime-es2015.js dist/angular-element/polyfills-es2015.js
dist/angular-element/scripts.js  dist/angular-element/main-es2015.js > preview/angularapp.js
