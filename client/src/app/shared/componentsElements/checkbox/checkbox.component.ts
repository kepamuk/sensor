import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `
      <label class="checkbox_wrap">
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
      </label>
  `,
  styles: [`
      .checkbox_wrap {
          position: relative;
          height: 25px;
          width: 25px;
          border-radius: 50%;
          border: 3px solid #9be809;
          -webkit-box-shadow: 4px 4px 24px 0px rgba(0,0,0,0.75);
          -moz-box-shadow: 4px 4px 24px 0px rgba(0,0,0,0.75);
          box-shadow: 4px 4px 24px 0px rgba(0,0,0,0.75);
          cursor: pointer;
      }

      .checkbox_wrap input {
          opacity: 0;
          display: none;
      }

      .checkmark {
          position: absolute;
          top: -8px;
          left: -3px;
          background-image: url('/assets/img/checkboxArrow.png');
          height: 25px;
          width: 25px;
          display: none;
          pointer-events: none;
      }

      .checkbox_wrap input:checked ~ .checkmark {
          display: block;
      }
  `]
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
