import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent implements OnInit {

    @Input() pageData;

    constructor(private _sanitizer: DomSanitizer) {

    }

    ngOnInit() {

    }

    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustStyle(`url(${image}), linear-gradient(#fff, #ebf5ff)`);
    }

}
