import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';
import {seo} from '../../shared/seo';

@Component({
    selector: 'app-exhibition',
    templateUrl: './exhibition.component.html',
    styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {

    pageData = {};

    constructor(private contentService: ContentService,
                private title: Title,
                private meta: Meta) {
        contentService.getContent()
            .subscribe(content => {
                this.pageData = content[0]['pages']['exhibition'];
                seo(content[0]['pages']['exhibition']['seo'], this.title, this.meta);
            });
    }

    ngOnInit() {
    }

}
