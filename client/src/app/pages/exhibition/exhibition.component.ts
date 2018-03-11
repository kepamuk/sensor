import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';

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
            });

        title.setTitle('Аренда интерактивного стола для презентаций, выставок и музеев в СПб и РФ');
        meta.addTags([
            {name: 'keywords', content: 'мулльтимедийный интерактивный стол аренда тач 43 55 дюймов'},
            {
                name: 'description',
                content: 'Сенсорные столы в аренду от 43 до 55 и более дюймов в наличии в СПб и доставка в регионы. Арендовать на мероприятие'
            }
        ]);
    }

    ngOnInit() {
    }

}
