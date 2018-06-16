import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {AgmCoreModule} from '@agm/core';
import {NgxGalleryModule} from 'ngx-gallery';

import {BackgroundComponent} from './components/background/background.component';
import {ElementsComponentsModule} from './elements-components.module';
import {CapabilityComponent} from './components/capability/capability.component';
import {CategorySensorComponent} from './components/category-sensor/category-sensor.component';
import {ConfidenceComponent} from './components/confidence/confidence.component';
import {EffectionComponent} from './components/effection/effection.component';
import {FaqComponent} from './components/faq/faq.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {MyModelComponent} from './components/my-model/my-model.component';
import {PopularSensorComponent} from './components/popular-sensor/popular-sensor.component';
import {ProcessComponent} from './components/process/process.component';
import {QuastionsComponent} from './components/quastions/quastions.component';
import {QuestionFormComponent} from './shared/componentsElements/question-form/question-form.component';
import {SeoComponent} from './components/seo/seo.component';
import {TableComponent} from './components/table/table.component';
import {VariantComponent} from './components/variant/variant.component';
import {VideoComponent} from './components/video/video.component';

import {GoodsService} from './services/goods.service';
import {SenderService} from './services/sender.service';
import {ContactsService} from './services/contacts.service';
import {SliderService} from './services/slider.service';
import {ContentService} from './services/content.service';
import {CalcComponent} from './shared/componentsElements/calc/calc.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [
        BackgroundComponent,
        CapabilityComponent,
        CategorySensorComponent,
        ConfidenceComponent,
        EffectionComponent,
        FaqComponent,
        FooterComponent,
        HeaderComponent,
        MyModelComponent,
        PopularSensorComponent,
        ProcessComponent,
        QuastionsComponent,
        QuestionFormComponent,
        SeoComponent,
        TableComponent,
        VariantComponent,
        VideoComponent,
        CalcComponent
    ],
    exports: [
        BackgroundComponent,
        CapabilityComponent,
        CategorySensorComponent,
        ConfidenceComponent,
        EffectionComponent,
        FaqComponent,
        FooterComponent,
        HeaderComponent,
        MyModelComponent,
        PopularSensorComponent,
        ProcessComponent,
        QuastionsComponent,
        QuestionFormComponent,
        SeoComponent,
        TableComponent,
        VariantComponent,
        VideoComponent,
        CalcComponent
    ],
    imports: [
        NgxGalleryModule,
        ElementsComponentsModule,
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCXpNCVM87m5OzYx5XBciW_n2elGQkhZZI'
        }),
        FormsModule,
        TextMaskModule,
        Ng2PageScrollModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        ContactsService,
        GoodsService,
        SenderService,
        ContentService,
        SliderService
    ]
})
export class MainComponentsModule {
}