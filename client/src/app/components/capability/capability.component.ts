import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-capability',
    templateUrl: './capability.component.html',
    styleUrls: ['./capability.component.css']
})
export class CapabilityComponent implements OnInit, OnDestroy {

    capability = [];
    @Input() imgCap;

    sub: Subscription;

    constructor(private contentService: ContentService) {
        this.sub = contentService.getContent()
            .subscribe(content => {
                this.capability = content[0]['capability'];
            });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }

}
