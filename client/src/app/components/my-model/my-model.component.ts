import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-my-model',
    templateUrl: './my-model.component.html',
    styleUrls: ['./my-model.component.css'],
    animations: [
        trigger('calculator', [
            state('in', style({
                height: '0',
                overflow: 'hidden'
            })),
            state('out', style({
                height: '*',
            })),
            transition('in => out', animate('400ms ease-in-out'))
        ])
    ]
})
export class MyModelComponent implements OnInit {

    animCalc = 'in';
    @Input() page;
    @Input() pageData;

    @Output() calcAnim: EventEmitter<any> = new EventEmitter();

    constructor() {

    }

    ngOnInit() {

    }

    onCalc() {
        this.animCalc = 'out';
    }

}
