import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SenderService} from '../../services/sender.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    messageSend;
    public phoneM = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(private senderService: SenderService) {
    }

    ngOnInit() {

    }

    onSubmit(f: NgForm) {

        this.senderService.send(f.value)
            .subscribe(res => {
                this.messageSend = res;
            });
        f.reset();

        window.setTimeout(() => {
            this.messageSend = null;
        }, 3000);
    }

}
