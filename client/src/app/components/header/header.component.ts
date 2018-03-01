import {Component, OnInit} from '@angular/core';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {NgForm} from '@angular/forms';
declare var $: any;

import {ContactsService} from '../../services/contacts.service';
import {Contacts} from '../../models/contacts';
import {GoodsService} from '../../services/goods.service';
import {SenderService} from '../../services/sender.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    contacts: Contacts;
    goods: any = [];
    message;

    public mask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


    constructor(private contactsService: ContactsService,
                private goodsService: GoodsService,
                private senderService: SenderService) {
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

    onSubmit(f: NgForm) {
        const values = f.value;
        if (!values['options']) {
            values['options'] = {};
        }
        values['options'].goodName = this.goods.name;

        this.senderService.send(values)
            .subscribe(res => {
                console.log(res);
                this.message = res;
            });
        f.reset();

        window.setTimeout(() => {
            $('#tata').modal('hide');
            this.message = null;
        }, 3000);
    }

}
