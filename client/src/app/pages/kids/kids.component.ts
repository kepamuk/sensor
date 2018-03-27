import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';
import {seo} from '../../shared/seo';
import {GoodsService} from '../../services/goods.service';

@Component({
    selector: 'app-kids',
    templateUrl: './kids.component.html',
    styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

    pageData = {};

    constructor(private contentService: ContentService,
                private title: Title,
                private meta: Meta) {
        contentService.getContent()
            .subscribe(content => {
                this.pageData = content[0]['pages']['kids'];
                seo(content[0]['pages']['kids']['seo'], this.title, this.meta);
            });
    }

    ngOnInit() {
    }

}
