import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.css']
})
export class SeoComponent {

  @Input() seohtml;

}
