import { Component, OnInit } from '@angular/core';
import {SliderService} from '../../services/slider.service';

declare var $: any;

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

    slider: any = [];

    constructor(private sliderService: SliderService) {
        this.sliderService.getSliders()
            .subscribe(data => {
                this.slider = data[0]['proccess'];
            });
    }

  ngOnInit() {
      $('.btn-proc').on('click', function () {
          $('.slick-dots > li').eq($(this).data( 'attr' )).trigger( 'click' );
      });
  }

}
