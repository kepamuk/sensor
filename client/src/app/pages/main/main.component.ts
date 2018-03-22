import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

import {ContentService} from '../../services/content.service';
import {seo} from '../../shared/seo';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    pageData = {};

    constructor(private contentService: ContentService,
                private title: Title,
                private meta: Meta) {
        contentService.getContent()
            .subscribe(content => {
                this.pageData = content[0]['pages']['main'];
                seo(content[0]['pages']['main']['seo'], this.title, this.meta);
            });


    }

    ngOnInit() {

    }

}
