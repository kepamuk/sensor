import {Injectable} from '@angular/core';
import {BaseApi} from '../shared/core/base-api';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContentService extends BaseApi {

    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    getContent() {
        return this.get('api/content/getContent');
    }

}
