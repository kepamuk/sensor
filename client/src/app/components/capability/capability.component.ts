import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';

@Component({
    selector: 'app-capability',
    templateUrl: './capability.component.html',
    styleUrls: ['./capability.component.css']
})
export class CapabilityComponent implements OnInit {

    capability = [];

    constructor(private contentService: ContentService) {
        contentService.getContent()
            .subscribe(content => {
                this.capability = content[0]['capability'];
            });
    }

    ngOnInit() {
    }

}
