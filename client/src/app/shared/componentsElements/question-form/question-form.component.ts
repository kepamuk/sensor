import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SenderService} from '../../../services/sender.service';

@Component({
    selector: 'app-question-form',
    template: `
        <form class="questions-input"
              #f="ngForm"
              (ngSubmit)="onSubmit(f)"
              novalidate>
            <input type="text"
                   class="questions-input__input"
                   placeholder="Номер телефона"
                   [textMask]="{mask: mask}"
                   pattern="8((\\(\\d{3}\\) ?)|(\\d{3}-))?\\d{3}-\\d{4}"
                   name="phone"
                   ngModel
                   #phone="ngModel"
                   required
                   [ngStyle]="{'border': phone.invalid && (phone.dirty || phone.touched) ? '1px solid red' : null}">
            <!--[disabled]="f.invalid"-->
            <app-button
                    [disabled]="f.invalid"
                    [styles]="{
            'backgroundColor': '#ffb90a',
            'border-radius': '5px',
            'width': '200px',
            'color': 'white',
            'border': 'none',
            'text-transform'    : 'uppercase',
            'font-family': 'PTSans-Bold',
            'text-shadow': '1.3px 1.6px 4px rgba(9, 12, 18, 0.3)',
            'float': 'right'
            }"
                    [hover]="{
                        'backgroundColor': 'rgb(255, 185, 100)'
            }"
            >
                Жду звонка!
            </app-button>
            <p *ngIf="message"
               [ngStyle]="{'color':'red'}">{{message.message}}</p>
        </form>
    `,
    styles: [`
        .questions-input__input {
            width: calc(100% - 220px);
            height: 50px;
            background-color: white;
            border-radius: 5px;
            border: none;
            font-family: 'PTSans-Bold';
            padding-left: 10px;
        }

        .questions-input__input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #000;
        }

        .questions-input__input::-moz-placeholder { /* Firefox 19+ */
            color: #000;
        }

        .questions-input__input:-ms-input-placeholder { /* IE 10+ */
            color: #000;
        }

        .questions-input__input:-moz-placeholder { /* Firefox 18- */
            color: #000;
        }

        @media screen and (max-width: 767px) {
            .questions-input__input {
                width: calc(100% - 140px);
            }

            :host /deep/ button {
                width: 130px !important;
            }
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionFormComponent implements OnInit {

    message;
    public mask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(private senderService: SenderService) {
    }

    ngOnInit() {
    }

    onSubmit(f: NgForm) {
        // console.log(f.value);

        f.value.id = 'question';
        this.senderService.send(f.value)
            .subscribe(res => {
                this.message = res;
            });
        f.reset();

        window.setTimeout(() => {
            this.message = null;
        }, 3000);
    }

}
