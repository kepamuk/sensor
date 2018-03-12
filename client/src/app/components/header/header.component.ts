import {Component, OnInit} from '@angular/core';
import {combineLatest} from 'rxjs/observable/combineLatest';

import {ContactsService} from '../../services/contacts.service';
import {Contacts} from '../../models/contacts';
import {GoodsService} from '../../services/goods.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    contacts: Contacts;
    goods: any = [];
    menu;

    constructor(private contactsService: ContactsService,
                private goodsService: GoodsService,
                router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.menu = 'none';
            }
        });
    }

    ngOnInit() {
        combineLatest(
            this.contactsService.getContacts(),
            this.goodsService.getGoods()
        ).subscribe(data => {
            this.contacts = data[0][0];
            this.goods = data[1].find((element) => element['_id'] === '5a957797f36d280b142d1daa');
        });
    }

}
