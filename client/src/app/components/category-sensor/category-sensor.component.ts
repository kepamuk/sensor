import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from '../../services/slider.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-category-sensor',
    templateUrl: './category-sensor.component.html',
    styleUrls: ['category-sensor.component.css']
})
export class CategorySensorComponent implements OnInit, OnDestroy {

    slider: any = [];
    sub: Subscription;

    constructor(private sliderService: SliderService) {
        this.sliderService.getSliders()
            .subscribe((data) => {
                this.slider = data[0]['category-sensor'];
            });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }

}
