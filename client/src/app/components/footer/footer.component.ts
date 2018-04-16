import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

    contacts;

    lat = 59.88918;
    lng = 30.335264;

    sub: Subscription;

    constructor(private contactsService: ContactsService) {
        this.sub = this.contactsService.getContacts()
            .subscribe(data => {
                this.contacts = data[0];
            });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}
