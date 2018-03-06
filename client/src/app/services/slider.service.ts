import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../shared/core/base-api';

@Injectable()
export class SliderService extends BaseApi {

    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    getSliders() {
        return this.get('api/slider/getSliders');
    }

}
