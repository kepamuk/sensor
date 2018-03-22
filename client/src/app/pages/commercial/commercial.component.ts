import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';
import {seo} from '../../shared/seo';

@Component({
    selector: 'app-commercial',
    templateUrl: './commercial.component.html',
    styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

    pageData = {};

    constructor(private contentService: ContentService,
                private title: Title,
                private meta: Meta) {
        contentService.getContent()
            .subscribe(content => {
                this.pageData = content[0]['pages']['commerc'];
                seo(content[0]['pages']['commerc']['seo'], this.title, this.meta);

            });
    }

    ngOnInit() {
    }

}
