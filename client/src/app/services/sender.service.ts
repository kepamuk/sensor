import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import {BaseApi} from '../shared/core/base-api';

@Injectable()
export class SenderService extends BaseApi {

    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    send(arg) {
        return this.post('api/sender/send', arg);
    }
}
