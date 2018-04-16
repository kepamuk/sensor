import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest} from 'rxjs/observable/combineLatest';

import {ContactsService} from '../../services/contacts.service';
import {GoodsService} from '../../services/goods.service';
import {NavigationStart, Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    contacts;
    goods: any = [];
    menu;

    sub: Subscription;
    sub1: Subscription;

    constructor(private contactsService: ContactsService,
                private goodsService: GoodsService,
                router: Router) {
        this.sub1 = router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.menu = 'none';
            }
        });
    }

    ngOnInit() {
        this.sub = combineLatest(
            this.contactsService.getContacts(),
            this.goodsService.getGoods()
        ).subscribe(data => {
            this.contacts = data[0][0];
            this.goods = data[1].find((element) => element['_id'] === '5a957797f36d280b142d1daa');
        });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }

}
