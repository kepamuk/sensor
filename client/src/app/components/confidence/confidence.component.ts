import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {SliderService} from '../../services/slider.service';
import {ContentService} from '../../services/content.service';
import {combineLatest} from "rxjs/observable/combineLatest";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-confidence',
    templateUrl: './confidence.component.html',
    styleUrls: ['./confidence.component.css']
})
export class ConfidenceComponent implements OnInit, OnDestroy {

    galleryOptions: NgxGalleryOptions[];
    galleryImages0: NgxGalleryImage[] = [];

    slider: any = [];
    contentGallery = [];

    sub: Subscription;

    constructor(private sliderService: SliderService,
                private contentService: ContentService) {
        this.sub = combineLatest(
            this.sliderService.getSliders(),
            this.contentService.getContent()
        ).subscribe(data => {

            this.slider = data[0][0]['confidence'];

            data[0][0]['gallerySlider'].map((e, i) => {
                e['gallery' + i].map((item) => {
                    this['galleryImages0'].push({
                        small: item.src,
                        medium: item.src,
                        big: item.src
                    });
                });
            });

            data[1][0]['gallery'].map(e => {
                this.contentGallery.push(e.html);
            });

        });
    }

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '100%',
                height: '400px',
                thumbnailsColumns: 5
            },
            {
                breakpoint: 767,
                thumbnailsColumns: 3
            }
        ];

    }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }


}
