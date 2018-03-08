import {AfterContentInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

declare var $: any;

import {GoodsService} from '../../services/goods.service';

@Component({
    selector: 'app-popular-sensor',
    templateUrl: './popular-sensor.component.html',
    styleUrls: ['./popular-sensor.component.css'],
    animations: [
        trigger('focusPanel', [
            state('in', style({
                height: '20px'
            })),
            state('out', style({
                height: '*',
            })),
            transition('in => out', animate('400ms ease-in-out'))
        ])
    ]
})

export class PopularSensorComponent implements AfterContentInit {

    goods;
    states;
    hide = false;
    presentSend;

    presents = [];

    @ViewChild('container', {read: ViewContainerRef}) viewContainerRef;

    constructor(private goodsService: GoodsService) {
        goodsService.getGoods()
            .subscribe(goods => {
                this.goods = goods;
                console.log(this.goods);
                this.states = this.goods.map(() => 'in');
            });

    }

    toggleChar(i: number) {
        this.states[i] = this.states[i] === 'in' ? 'out' : '';
    }

    ngAfterContentInit() {
        const self = this;
        $('#catalog').on('shown.bs.modal', function () {
            console.log('shown');
            self.hide = true;
        });
        $('#catalog').on('hidden.bs.modal', function () {
            console.log('hidden');
            self.hide = false;
            self.presents = [];
        });
    }

    onCheck(src) {
        if (this.presents.indexOf(src) === -1) {
            this.presents.push(src);
        } else {
            this.presents.splice(this.presents.indexOf(src), 1);
        }
    }

    sendPresent(i) {

        this.presentSend = this.presents;

        $('#present' + i).modal('hide');
        window.setTimeout(() => {
            $('#good' + i).modal('show');
        }, 400);

    }

}
