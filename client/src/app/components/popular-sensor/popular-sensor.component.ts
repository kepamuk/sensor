import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

declare var $: any;

import {GoodsService} from '../../services/goods.service';
import {SliderComponent} from '../../shared/componentsElements/slider/slider.component';
import {SliderService} from '../../services/slider.service';

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

export class PopularSensorComponent implements OnInit, AfterViewInit, AfterContentInit {

    goods;
    states;
    slides = [];
    hide = false;

    @ViewChild('container', {read: ViewContainerRef}) viewContainerRef;

    constructor(private goodsService: GoodsService,
                private sliderService: SliderService) {
        goodsService.getGoods()
            .subscribe(goods => {
                this.goods = goods;
                this.states = this.goods.map(() => 'in');
            });

        sliderService.getSliders()
            .subscribe(slides => {
                this.slides = slides[0]['school'];
            });
    }

    toggleChar(i: number) {
        this.states[i] = this.states[i] === 'in' ? 'out' : '';
    }

    ngOnInit() {

    }

    ngAfterViewInit() {

    }

    ngAfterContentInit() {
        const self = this;
        $('#catalog').on('shown.bs.modal', function (e) {
            // self.createComp();
            console.log('shown');
            $('#tttt').slick('refresh');
            self.hide = true;
        });
        $('#catalog').on('hidden.bs.modal', function() {
            console.log('hidden');
        });
    }

}
