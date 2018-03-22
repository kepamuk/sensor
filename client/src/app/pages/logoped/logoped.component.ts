import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';
import {seo} from '../../shared/seo';

@Component({
    selector: 'app-logoped',
    templateUrl: './logoped.component.html',
    styleUrls: ['./logoped.component.css']
})
export class LogopedComponent implements OnInit {

    pageData = {};

    constructor(private contentService: ContentService,
                private title: Title,
                private meta: Meta) {
        contentService.getContent()
            .subscribe(content => {
                this.pageData = content[0]['pages']['logoped'];
                seo(content[0]['pages']['logoped']['seo'], this.title, this.meta);
            });
    }

    ngOnInit() {
    }

}
