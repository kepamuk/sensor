import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-quastions',
    templateUrl: './quastions.component.html',
    styleUrls: ['./quastions.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuastionsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

}
