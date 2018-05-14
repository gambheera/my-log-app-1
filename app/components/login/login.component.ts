import { Component, OnInit } from "@angular/core";
import { Page, Color } from "tns-core-modules/ui/page/page";

// import firebase = require('nativescript-plugin-firebase');

// firebase.init()
//     .then(() => console.log('Firebase initialized!!!'))
//     .catch(error => console.log(`Failed to initialize Firebase ${error}`));

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    constructor(private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
}