import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BaseApi} from '../shared/core/base-api';

@Injectable()
export class ContactsService extends BaseApi {

    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    getContacts() {
        return this.get('api/contacts/getContacts');
    }

}
