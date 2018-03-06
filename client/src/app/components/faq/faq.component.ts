import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    accordion = [];

    constructor(private contentService: ContentService) {
    
    }

    ngOnInit() {
        this.contentService.getContent()
            .subscribe((data) => {
                this.accordion = data[0]['accordion'];
            });
    }

}
