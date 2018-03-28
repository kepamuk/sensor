import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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
import {AppRoutingModule} from './app-routing.module';
import {PhonePipe} from './shared/pipes/phone';


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
        BtnLinkComponent
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
        BtnLinkComponent
    ],
    imports: [
        SlickModule.forRoot(),
        TextMaskModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class ElementsComponentsModule {
}