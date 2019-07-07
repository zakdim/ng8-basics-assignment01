import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: `
    <div class="alert alert-success">{{successMsg}}</div>
    `,
    styles: [
        `div { 
            font-weight: bold; 
            font-size: larger;
        }`
    ]
})
export class SuccessAlertComponent {

    successMsg = 'Everything looks good!';

    constructor() {
    }
}