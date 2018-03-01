import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BaseApi} from '../shared/core/base-api';

@Injectable()
export class GoodsService extends BaseApi {

    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    getGoods() {
        return this.get('api/goods/getGoods');
    }

}
