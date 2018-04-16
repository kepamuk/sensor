import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from '../../services/slider.service';
import {Subscription} from "rxjs/Subscription";

declare var $: any;

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit, OnDestroy {

    slider: any = [];
    sub: Subscription;

    constructor(private sliderService: SliderService) {
        this.sub = this.sliderService.getSliders()
            .subscribe(data => {
                this.slider = data[0]['proccess'];
            });
    }

  ngOnInit() {
      $('.btn-proc').on('click', function () {
          $('.slick-dots > li').eq($(this).data( 'attr' )).trigger( 'click' );
      });
  }

    ngOnDestroy(): void {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }

}
