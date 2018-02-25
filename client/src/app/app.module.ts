import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';

import 'hammerjs';
import 'mousetrap';
import {NgxCarouselModule} from 'ngx-carousel';
import {SlickModule} from 'ngx-slick';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HoverDirective} from './shared/directives/hover.directive';
import {BackgroundComponent} from './components/background/background.component';
import {CapabilityComponent} from './components/capability/capability.component';
import {QuastionsComponent} from './components/quastions/quastions.component';
import {PopularSensorComponent} from './components/popular-sensor/popular-sensor.component';
import {VariantComponent} from './components/variant/variant.component';
import {CategorySensorComponent} from './components/category-sensor/category-sensor.component';
import {SliderComponent} from './shared/componentsElements/slider/slider.component';
import {EffectionComponent} from './components/effection/effection.component';
import {ProcessComponent} from './components/process/process.component';
import {VideoComponent} from './components/video/video.component';
import {ConfidenceComponent} from './components/confidence/confidence.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {TableComponent} from './components/table/table.component';
import {FaqComponent} from './components/faq/faq.component';
import {SeoComponent} from './components/seo/seo.component';
import {FooterComponent} from './components/footer/footer.component';
import {BtnLinkComponent} from './shared/componentsElements/btn/btn-link.component';
import {BtnButtonComponent} from './shared/componentsElements/btn/btn-button.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BtnLinkComponent,
        BtnButtonComponent,
        HoverDirective,
        BackgroundComponent,
        CapabilityComponent,
        QuastionsComponent,
        PopularSensorComponent,
        VariantComponent,
        CategorySensorComponent,
        SliderComponent,
        EffectionComponent,
        ProcessComponent,
        VideoComponent,
        ConfidenceComponent,
        TableComponent,
        FaqComponent,
        SeoComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        Angular2FontawesomeModule,
        NgxCarouselModule,
        SlickModule.forRoot(),
        NgxGalleryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
