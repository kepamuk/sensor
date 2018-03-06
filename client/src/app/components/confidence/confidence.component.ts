import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {SliderService} from '../../services/slider.service';
import {ContentService} from '../../services/content.service';

@Component({
    selector: 'app-confidence',
    templateUrl: './confidence.component.html',
    styleUrls: ['./confidence.component.css']
})
export class ConfidenceComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages0: NgxGalleryImage[] = [];
    galleryImages1: NgxGalleryImage[] = [];
    galleryImages2: NgxGalleryImage[] = [];
    galleryImages3: NgxGalleryImage[] = [];

    slider: any = [];
    contentGallery = [];

    constructor(private sliderService: SliderService,
                private contentService: ContentService) {
        this.sliderService.getSliders()
            .subscribe((data) => {
                this.slider = data[0]['confidence'];
                data[0]['gallerySlider'].map((e, i) => {
                    e['gallery' + i].map((item) => {
                        this['galleryImages' + i].push({
                            small: item.src,
                            medium: item.src,
                            big: item.src
                        });
                    });
                });
            });

        this.contentService.getContent()
            .subscribe((data) => {
                data[0]['gallery'].map(e => {
                    this.contentGallery.push(e.html);
                });
            });
    }

    ngOnInit(): void {

        this.galleryOptions = [
            {'image': false, 'height': '100px'},
            {'breakpoint': 500, 'width': '100%'}
        ];

    }


}
