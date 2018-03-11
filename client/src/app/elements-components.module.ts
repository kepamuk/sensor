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
import {PopupPresentComponent} from './shared/componentsElements/popup/popup-present.component';
import {PopupComponent} from './shared/componentsElements/popup/popup.component';
import {CheckboxComponent} from './shared/componentsElements/checkbox/checkbox.component';


@NgModule({
    declarations: [
        SliderComponent,
        CheckboxComponent,
        PopupComponent,
        PopupPresentComponent,
        PopupFormComponent,
        SafePipe,
        HoverDirective,
        BtnButtonComponent,
        BtnLinkComponent
    ],
    exports: [
        SliderComponent,
        CheckboxComponent,
        PopupComponent,
        PopupPresentComponent,
        PopupFormComponent,
        SafePipe,
        HoverDirective,
        BtnButtonComponent,
        BtnLinkComponent
    ],
    imports: [
        SlickModule.forRoot(),
        TextMaskModule,
        BrowserModule,
        FormsModule
    ]
})
export class ElementsComponentsModule {
}