import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
    selector: 'app-confidence',
    templateUrl: './confidence.component.html',
    styleUrls: ['./confidence.component.css']
})
export class ConfidenceComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {'image': false, 'height': '100px'},
            {'breakpoint': 500, 'width': '100%'}
        ];

        this.galleryImages = [
            {
                small: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg',
                medium: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg',
                big: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg'
            },
            {
                small: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg',
                medium: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg',
                big: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg'
            },
            {
                small: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg',
                medium: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg',
                big: 'http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg'
            }
        ];
    }


}
