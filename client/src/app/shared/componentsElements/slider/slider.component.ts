import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-slider',
    template: `
        <div [ngSwitch]="template">
            <div *ngSwitchDefault>FORM 1</div>

            <ngx-slick *ngSwitchCase="'category-sensor'"
                       class="slick-catSmart"
                       #slickModal="slick-modal"
                       [config]="config">
                <div ngxSlickItem
                     class="slick-catSmart__slide"
                     *ngFor="let s of slides">
                    <div class="img_wrap">
                        <img [src]="s.src" alt="">
                    </div>
                    <p>{{s.label}}</p>
                </div>
            </ngx-slick>

            <ngx-slick *ngSwitchCase="'effection'"
                       class="slick-catSmart"
                       #slickModal="slick-modal"
                       [config]="config">
                <div ngxSlickItem
                     class="slick-catSmart__slide-effect"
                     *ngFor="let s of slides">
                    <div class="img_wrap">
                        <img [src]="s.src" alt="">
                    </div>
                    <p>{{s.label}}</p>
                    <span>{{s.text}}</span>
                </div>
            </ngx-slick>

            <ngx-slick *ngSwitchCase="'process'"
                       class="slick-catSmart"
                       #slickModal="slick-modal"
                       [config]="config">
                <div ngxSlickItem
                     class="slick-process__slide"
                     *ngFor="let s of slides">
                    <div class="col-lg-4 col-lg-offset-1 col-md-6">
                        <h3>{{s.label}}</h3>
                        <p>{{s.text}}</p>
                        <button class="btn">Получить консультацию</button>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <img [src]="s.src1" alt="">
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <img [src]="s.src2" alt="">
                    </div>
                </div>
            </ngx-slick>

            <ngx-slick *ngSwitchCase="'video'"
                       class="slick-video"
                       #slickModal="slick-modal"
                       [config]="config">
                <div ngxSlickItem
                     class="slick-video__slide"
                     *ngFor="let s of slides">
                    <iframe width="100%"
                            height="210"
                            [src]="sanitizer.bypassSecurityTrustResourceUrl(s.src)"
                            frameborder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowfullscreen></iframe>
                </div>
            </ngx-slick>

            <ngx-slick *ngSwitchCase="'confidence'"
                       class="slick-confidence"
                       #slickModal="slick-modal"
                       [config]="config">
                <div ngxSlickItem
                     *ngFor="let s of slides"
                     class="slick-confidence__slide">
                    <img [src]="s.src" alt="">
                </div>
            </ngx-slick>

        </div>
    `,
    styles: [`
        /*category-sensor*/
        .slick-catSmart {
            margin-top: 50px;
        }

        .slick-catSmart__slide {
            text-align: center;
            outline: none;
        }

        .slick-catSmart__slide .img_wrap {
            border-radius: 50%;
            overflow: hidden;
            width: 150px;
            height: 150px;
            margin: 0 auto;
        }

        .slick-catSmart__slide p {
            font-size: 14px;
            font-family: 'PTSans-Bold';
            max-width: 160px;
            margin: 14px auto 0;
        }

        /*effection*/
        .slick-catSmart__slide {
            text-align: center;
            outline: none;
        }

        .slick-catSmart__slide-effect {
            text-align: center;
            outline: none;
        }

        .slick-catSmart__slide-effect .img_wrap {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
        }

        .slick-catSmart__slide-effect p {
            max-width: 270px;
            margin: 30px auto 0;
            text-align: center;
            font-family: 'PTSans-Bold';
            font-size: 16px;
        }

        .slick-catSmart__slide-effect span {
            display: inline-block;
            margin: 24px auto 0;
            max-width: 220px;
        }

        /*video*/
        .slick-video {
            margin-top: 42px;
        }

        .slick-video__slide {
            padding: 0 20px;
            outline: none;
        }

        /*confidence*/
        .slick-confidence {
            margin-top: 10px;
        }

    `]
})
export class SliderComponent {

    @Input() slides = [];
    @Input() template: string;
    @Input() config = [];

    constructor(public sanitizer: DomSanitizer) {

    }

}
