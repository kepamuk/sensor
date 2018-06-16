import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

declare var $: any;

import {GoodsService} from '../../services/goods.service';
import {Subscription} from "rxjs/Subscription";

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
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class PopularSensorComponent implements AfterContentInit, OnDestroy {

    goods;
    states;
    hide = false;
    presentSend;

    presents = [];

    @Input() page;
    @Input() pageData;
    sub: Subscription;

    constructor(private goodsService: GoodsService) {
        this.sub = goodsService.getGoods()
            .subscribe(goods => {
                this.goods = goods;
                this.states = this.goods.map(() => 'in');
            });

    }

    toggleChar(i: number) {
        this.states[i] = this.states[i] === 'in' ? 'out' : '';
    }

    ngAfterContentInit() {
        const self = this;
        $('#catalog').on('shown.bs.modal', function () {
            self.hide = true;
        });
        $('#catalog').on('hidden.bs.modal', function () {
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

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
