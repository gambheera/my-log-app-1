import { Component } from "@angular/core";

import firebase = require('nativescript-plugin-firebase');

firebase.init()
    .then(() => console.log('Firebase initialized!!!'))
    .catch(error => console.log(`Failed to initialize Firebase ${error}`));

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { }
