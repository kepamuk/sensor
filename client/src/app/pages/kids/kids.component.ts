import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';

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
            });

        title.setTitle('Интерактивный стол для детей - Выгодные цены для ДОУ и Школ');
        meta.addTags([
            {name: 'keywords', content: 'купить сенсорный интерактивный стол для детей детского сада доу школ дошкольников'},
            {name: 'description', content: 'Сенсорные столы для детских учреждений - c установкой 100+ обучающих и развивающих программ'}
        ]);
    }

    ngOnInit() {
    }

}
