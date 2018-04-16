import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from '../../services/slider.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnDestroy {

    slider: any = [];
    sub: Subscription;

    constructor(private sliderService: SliderService) {
        this.sub = this.sliderService.getSliders()
            .subscribe((data) => {
                this.slider = data[0]['video'];
            });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }

}
