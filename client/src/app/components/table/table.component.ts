import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SenderService} from '../../services/sender.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

    messageSend;
    public phoneM = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    sub: Subscription;

    constructor(private senderService: SenderService) {
    }

    ngOnInit() {

    }

    onSubmit(f: NgForm) {

        this.sub = this.senderService.send(f.value)
            .subscribe(res => {
                this.messageSend = res;
            });
        f.reset();

        window.setTimeout(() => {
            this.messageSend = null;
        }, 3000);
    }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }

}
