import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {

    pageData = {};

    constructor(private contentService: ContentService,
                private title: Title,
                private meta: Meta) {
        contentService.getContent()
            .subscribe(content => {
                this.pageData = content[0]['pages']['multi'];
            });

        title.setTitle('Интерактивные столы мультитач от 6 до 40 касаний купить');
        meta.addTags([
            {name: 'keywords', content: 'интерактивный мультитач стол до 40 касаний купить тач скрин'},
            {
                name: 'description',
                content: 'Купить интерактивный стол с мультитач экраном высокой точности. Быстрая реакция на касания до 20 человек'
            }
        ]);
    }

  ngOnInit() {
  }

}
