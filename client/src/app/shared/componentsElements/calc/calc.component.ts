import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {GoodsService} from '../../../services/goods.service';
import {SenderService} from '../../../services/sender.service';
declare var $: any;

@Component({
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit, AfterContentInit {

    valueDefault = 131600;
    valueResult = this.valueDefault;
    typesDefault = 0;
    diagonalDefault = 0;
    touchDefault = 0;
    optionsDefault = 0;
    calc = {
        types: [
            {name: 'Intel i3, 8 Gb RAM', price: 0},
            {name: 'Intel i5, 8 Gb RAM', price: 7000},
            {name: 'Intel i7, 16 Gb RAM', price: 25200}
        ],
        diagonal: [
            {name: 32, price: 0},
            {name: 43, price: 8400},
            {name: 49, price: 28000},
            {name: 55, price: 46200},
            {name: 65, price: 126000}
        ],
        touch: [
            {name: '2-6', price: 0},
            {name: 10, price: 2800},
            {name: 16, price: 7000},
            {name: 32, price: 9800},
            {name: 40, price: 11200}
        ],
        options: [
            {name: 'Монолитный корпус (Экран и корпус - Единая поверхность)', price: 0},
            {name: 'Механизированный поворотный механизм', price: 5000}
        ]
    };
    types = {
        types: 0,
        diagonal: 0,
        touch: 0,
        options: 0
    };

    mask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    slidesKids;
    presents = [];
    message;
    hide = false;

    @Input() page;
    @Input() pageData;

    constructor(private senderService: SenderService,
                private goodsService: GoodsService) {
        goodsService.getGoods()
            .subscribe(goods => {
                this.slidesKids = goods[2].presents;
            });
    }

    ngOnInit() {

    }

    ngAfterContentInit() {
        const self = this;
        $('#kidsPop').on('shown.bs.modal', function () {
            self.hide = true;
            self.presents = [];
        });
        $('#kidsPop').on('hidden.bs.modal', function () {
            self.hide = false;
        });
    }

    choose(e, type) {
        this.types[type] = e.price;
        this.valueResult = this.valueDefault + this.sum(this.types);
    }

    sum(obj) {
        let sum = 0;
        for (const el in obj) {
            if (obj.hasOwnProperty(el)) {
                sum += parseFloat(obj[el]);
            }
        }
        return sum;
    }

    sendPresent() {
        $('#kids').modal('hide');
    }

    onCheck(src) {
        if (this.presents.indexOf(src) === -1) {
            this.presents.push(src);
        } else {
            this.presents.splice(this.presents.indexOf(src), 1);
        }

    }

    onSubmit(f: NgForm) {

        const values = f.value;

        values.id = 'calc';
        values.presents = this.presents;
        values.calc = {
            summ: this.valueResult,
            types: f.value.types,
            diagonal: f.value.diagonal,
            touch: f.value.touch,
            options: f.value.options
        };

        this.senderService.send(values)
            .subscribe(res => {
                this.message = res;
            });
        f.reset();
        f.form.patchValue({
            phone: '',
            types: 0,
            diagonal: 0,
            touch: 0,
            options: 0
        });
        this.valueResult = this.valueDefault;

        window.setTimeout(() => {
            this.message = null;
            this.presents = [];
        }, 3000);

    }

}
