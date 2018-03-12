import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';

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
            });

        title.setTitle('Сенсорные столы от производителя цена от 95 000 руб');
        meta.addTags([
            {name: 'keywords', content: 'сенсорный самрт стол интерактивный купить цена производителя'},
            {name: 'description', content: 'Умные сенсорные столы с HD-экраном с программами для школ, детских садов и выставок. Выбирайте'}
        ]);
    }

    ngOnInit() {
    }

}
