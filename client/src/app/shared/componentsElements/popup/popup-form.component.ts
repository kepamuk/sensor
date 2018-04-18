import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

declare var $: any;
import {SenderService} from '../../../services/sender.service';

@Component({
    selector: 'app-popup-form',
    template: `
        <form class="popup_3"
              #f="ngForm"
              (ngSubmit)="onSubmit(f)"
              novalidate>
            <div class="popular-img">
                <img src="{{goods?.img}}" alt="">
            </div>
            <div class="popup3_part">
                <!--<h4>{{goods?.name}}</h4>-->
                <h4>Получить консультацию специалиста по сенсорным столам</h4>
                <div *ngIf="popup.substring(0, 4) === 'good'">
                    <span class="present">+ подарок на сумму {{goods?.presentSum}} Р</span>
                    <div class="sensor-price__left">
                        <label *ngFor="let s of goods['sizes']">
                            <input name="options"
                                   type="radio"
                                   [value]="s"
                                   [(ngModel)]="options">
                            {{s.size}}" от
                            <span>
                <span>{{s.price}}</span>
                ₽
                </span>
                        </label>
                    </div>
                </div>
                <input class="input_form"
                       type="text"
                       placeholder="Ваше имя"
                       name="name"
                       ngModel
                       #name="ngModel">
                <input class="input_form"
                       type="text"
                       placeholder="Номер телефона"
                       name="phone"
                       ngModel
                       #phone="ngModel"
                       [textMask]="{mask: mask}"
                       pattern="8((\\(\\d{3}\\) ?)|(\\d{3}-))?\\d{3}-\\d{4}"
                       required>
                <div *ngIf="phone.invalid && (phone.dirty || phone.touched)"
                     class="alert-danger">
                    <div *ngIf="phone.errors.required">
                        Требуется телефон.
                    </div>
                    <div *ngIf="phone.errors.pattern">
                        Не валидный номер.
                    </div>
                </div>
            </div>
            <div class="btn_wrap">
                <div *ngIf="message"
                     class="alert alert-{{message.status}}">
                    {{message.message}}
                </div>
                <!--[disabled]="f.invalid"-->
                <app-button [disabled]="f.invalid"
                            [styles]="{'background-color': '#0093d1', 'color': '#fff','min-width':'140px'}"
                            [hover]="{'background-color': 'transparent', 'color': '#0093d1'}">
                    Заказать
                </app-button>
            </div>
        </form>
    `,
    styles: [`

        .popup_3 {
            padding: 30px;
        }

        .popup_3 .popular-img {
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 54%;
            display: inline-block;
            vertical-align: top;
        }

        .popup_3 .popular-img img {
            width: 100%;
        }

        .popup3_part {
            width: 40%;
            float: right;
        }

        .popup3_part h4 {
            font-size: 22px;
            font-family: 'PTSans-Bold';
        }

        .popup3_part a {
            font-size: 14px;
            color: #0093d1;
            display: inline-block;
            text-decoration: underline;
        }

        .popup3_part a:hover {
            text-decoration: none;
        }

        .popup3_part .sensor-price__left {
            width: auto;
            margin: 10px 0;
        }

        .popup3_part label {
            font-family: 'PTSans-Bold';
            font-size: 18px;
            color: #333333;
            margin-left: 10px;
            cursor: pointer;
        }

        .sensor-price__left label span {
            color: #00573d;
        }

        .input_form {
            width: 100%;
            height: 50px;
            background-color: white;
            border: 1px solid #d9d9d9;
            border-radius: 5px;
            padding-left: 20px;
            margin-bottom: 10px;
        }

        h4 {
            margin-bottom: 20px;
        }

        @media screen and (max-width: 767px) {
            .popup_3 .popular-img,
            .popup_3 .popup3_part {
                width: 100%;
            }

            .popup_3 .popular-img {
                display: none;
            }
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupFormComponent implements OnInit {

    @Input() goods: any = [];
    @Input() popup: string;
    @Input() presents;
    message;

    public mask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(private senderService: SenderService) {
    }

    ngOnInit() {

    }

    onSubmit(f: NgForm) {
        const values = f.value;

        if (!values['options']) {
            values['options'] = {};
        }
        values['options'].goodName = this.goods.name;
        values.presents = this.presents;
        values.id = 'header_form';

        this.senderService.send(values)
            .subscribe(res => {
                this.message = res;
            });
        f.reset();

        window.setTimeout(() => {
            $(`#${this.popup}`).modal('hide');
            this.message = null;
            this.presents = [];
        }, 3000);
    }

}
