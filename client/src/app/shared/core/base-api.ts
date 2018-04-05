import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseApi {

    // private url = 'http://localhost:8080/';
    private url = 'http://xn----itbazhagdogcfn6jg.xn--p1ai/';

    constructor(public http: HttpClient) {
    }

    concatUrl(link: string) {
        return this.url + link;
    }

    get(link): Observable<any> {
        return this.http.get(this.concatUrl(link))
            .map((response: any) => response);
    }

    post(link, data): Observable<any> {
        return this.http.post(this.concatUrl(link), data)
            .map((response: any) => response);
    }

    // put(link, data): Observable<any> {
    //     return this.http.put(this.concatUrl(link), data)
    //         .map((response: any) => response);
    // }

}