import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-btn',
    template: `
        <a href="#"
           class="btn"
           [ngStyle]="styles"
           [appHover]="hover"
           [appStyle]="styles">
            <ng-content></ng-content>
        </a>
    `,
    styles: [
            `
            .btn {
                height: 50px;
                border: 1px solid #0093d1;
                border-radius: 25px;
                font-size: 16px;
                color: #0093d1;
                text-align: center;
                padding: 0 16px;
                line-height: 50px;
                -webkit-transition: .25s background-color;
                -moz-transition: .25s background-color;
                -ms-transition: .25s background-color;
                -o-transition: .25s background-color;
                transition: .25s background-color;
            }
        `
    ]
})
export class BtnLinkComponent {

    @Input() styles;
    @Input() hover;
    @Input() template;

    constructor() {

    }

}
