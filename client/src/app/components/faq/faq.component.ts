import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {

    accordion = [];
    sub: Subscription;

    constructor(private contentService: ContentService) {
    
    }

    ngOnInit() {
        this.sub = this.contentService.getContent()
            .subscribe((data) => {
                this.accordion = data[0]['accordion'];
            });
    }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }

}
