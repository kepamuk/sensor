import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';

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
            });

        title.setTitle('Логопедический интерактивный стол с голосовым модулем');
        meta.addTags([
            {name: 'keywords', content: 'купить интерактивный логопедический стол сенсорный для логопеда цена'},
            {
                name: 'description',
                content: 'Интерактивные игры со звуками - увлечь ребенка теперь легко. Устанавливаем все необходимые логопеду программы. Стол прост в управлении. Гарантия 2 года'
            }
        ]);
    }

    ngOnInit() {
    }

}
