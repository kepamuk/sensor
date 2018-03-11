import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';

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
            });

        title.setTitle('Интерактивные столы для кафе, ресторанов и друхих бизнесов');
        meta.addTags([
            {name: 'keywords', content: 'интерактивные столы для кафе ресторанов недорого для бизнеса цена ниже'},
            {
                name: 'description',
                content: 'Сенсорные столы для кафе увеличивают средний чек на 30% и повышают лояльность посетителей, не требуя затрат на обслуживание.'
            }
        ]);
    }

    ngOnInit() {
    }

}
