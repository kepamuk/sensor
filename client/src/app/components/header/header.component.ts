import {Component, OnInit} from '@angular/core';
import {combineLatest} from 'rxjs/observable/combineLatest';

import {ContactsService} from '../../services/contacts.service';
import {Contacts} from '../../models/contacts';
import {GoodsService} from '../../services/goods.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    contacts: Contacts;
    goods: any = [];

    constructor(private contactsService: ContactsService,
                private goodsService: GoodsService) {
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
