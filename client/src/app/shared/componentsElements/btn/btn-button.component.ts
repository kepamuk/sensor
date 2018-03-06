import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
        <button class="btn"
                [ngStyle]="styles"
                [appHover]="hover"
                [appStyle]="styles"
                [disabled]="disabled">
            <ng-content></ng-content>
        </button>
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

            .btn:focus,
            .btn:active {
                outline: none;

            }
            :host(:hover) /deep/ span{
                text-decoration: none !important;
            }
        `
    ]
})
export class BtnButtonComponent {

    @Input() styles;
    @Input() hover;
    @Input() template;
    @Input() disabled;

    constructor() {

    }

}
