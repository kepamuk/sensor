import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {SlickModule} from 'ngx-slick';

import {BtnLinkComponent} from './shared/componentsElements/btn/btn-link.component';
import {HoverDirective} from './shared/directives/hover.directive';
import {BtnButtonComponent} from './shared/componentsElements/btn/btn-button.component';
import {SafePipe, SliderComponent} from './shared/componentsElements/slider/slider.component';
import {PopupFormComponent} from './shared/componentsElements/popup/popup-form.component';
import {PopupComponent} from './shared/componentsElements/popup/popup.component';
import {CheckboxComponent} from './shared/componentsElements/checkbox/checkbox.component';
import {PhonePipe} from './shared/pipes/phone';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {QuestionFormComponent} from "./shared/componentsElements/question-form/question-form.component";


@NgModule({
    declarations: [
        SliderComponent,
        CheckboxComponent,
        PopupComponent,
        PopupFormComponent,
        SafePipe,
        PhonePipe,
        HoverDirective,
        BtnButtonComponent,
        BtnLinkComponent,
        QuestionFormComponent
    ],
    exports: [
        SliderComponent,
        CheckboxComponent,
        PopupComponent,
        PopupFormComponent,
        SafePipe,
        PhonePipe,
        HoverDirective,
        BtnButtonComponent,
        BtnLinkComponent,
        QuestionFormComponent
    ],
    imports: [
        SlickModule.forRoot(),
        TextMaskModule,
        FormsModule,
        RouterModule,
        CommonModule,
    ]
})
export class ElementsComponentsModule {
}