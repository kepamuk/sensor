import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    contacts;

    lat = 59.88918;
    lng = 30.335264;

    constructor(private contactsService: ContactsService) {
        this.contactsService.getContacts()
            .subscribe(data => {
                this.contacts = data[0];
            });
    }

    ngOnInit() {
    }

}
