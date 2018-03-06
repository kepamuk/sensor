import {Component, OnInit} from '@angular/core';
import {SliderService} from '../../services/slider.service';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    slider: any = [];

    constructor(private sliderService: SliderService) {
        this.sliderService.getSliders()
            .subscribe((data) => {
                this.slider = data[0]['video'];
            });
    }

    ngOnInit() {
    }

}
