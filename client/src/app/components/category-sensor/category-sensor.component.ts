import {Component, OnInit} from '@angular/core';
import {SliderService} from '../../services/slider.service';

@Component({
    selector: 'app-category-sensor',
    templateUrl: './category-sensor.component.html',
    styleUrls: ['category-sensor.component.css']
})
export class CategorySensorComponent implements OnInit {

    slider: any = [];

    constructor(private sliderService: SliderService) {
        this.sliderService.getSliders()
            .subscribe((data) => {
                this.slider = data[0]['category-sensor'];
            });
    }

    ngOnInit(): void {
    }

}
