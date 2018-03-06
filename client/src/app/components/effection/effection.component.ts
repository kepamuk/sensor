import {Component, OnInit} from '@angular/core';
import {SliderService} from '../../services/slider.service';

@Component({
    selector: 'app-effection',
    templateUrl: './effection.component.html',
    styleUrls: ['./effection.component.css']
})
export class EffectionComponent implements OnInit {

    slider: any = [];

    constructor(private sliderService: SliderService) {
        this.sliderService.getSliders()
            .subscribe(data => {
                this.slider = data[0]['effection'];
            });
    }

    ngOnInit() {
    }

}
