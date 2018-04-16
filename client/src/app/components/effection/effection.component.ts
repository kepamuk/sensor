import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from '../../services/slider.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-effection',
    templateUrl: './effection.component.html',
    styleUrls: ['./effection.component.css']
})
export class EffectionComponent implements OnInit, OnDestroy {

    slider: any = [];
    sub: Subscription;

    constructor(private sliderService: SliderService) {
        this.sub = this.sliderService.getSliders()
            .subscribe(data => {
                this.slider = data[0]['effection'];
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
