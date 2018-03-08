import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-checkbox',
    template: `
        <label class="checkbox_wrap">
            <input type="checkbox"
                   (change)="onChange()"
                   [checked]="save">
            <span class="checkmark"></span>
        </label>
    `,
    styles: [`
        .checkbox_wrap {
            position: relative;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            border: 3px solid #9be809;
            -webkit-box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.75);
            box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.75);
            cursor: pointer;
            background-color: #fff;
            bottom: 50px;
            right: -50px;
        }

        .checkbox_wrap input {
            opacity: 0;
            display: none;
        }

        .checkmark {
            position: absolute;
            top: -8px;
            left: -3px;
            background-image: url('/assets/img/checkboxArrow.png');
            height: 25px;
            width: 25px;
            display: none;
            pointer-events: none;
        }

        .checkbox_wrap input:checked ~ .checkmark {
            display: block;
        }
    `]
})
export class CheckboxComponent implements OnInit {

    @Input() src;
    @Output() checkedB = new EventEmitter<any>();
    save = false;

    constructor() {
    }

    ngOnInit() {

    }

    onChange() {
        this.checkedB.emit(this.src);
        return this.save = !this.save;
    }

}
