import {NgModule} from '@angular/core';
import {GoTopButtonModule} from 'ng2-go-top-button';

import {AppComponent} from './app.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './pages/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentService} from "./services/content.service";
import {SenderService} from "./services/sender.service";
import {GoodsService} from "./services/goods.service";
import {SliderService} from "./services/slider.service";
import {ContactsService} from "./services/contacts.service";
import {FooterComponent} from "./components/footer/footer.component";
import {MyModelComponent} from "./components/my-model/my-model.component";

import {CategorySensorComponent} from "./components/category-sensor/category-sensor.component";
import {EffectionComponent} from "./components/effection/effection.component";
import {PopularSensorComponent} from "./components/popular-sensor/popular-sensor.component";
import {HeaderComponent} from "./components/header/header.component";

import {FormsModule} from "@angular/forms";
import {TextMaskModule} from "angular2-text-mask";
import {HttpClientModule} from "@angular/common/http";
import {AgmCoreModule} from "@agm/core";
import {ElementsComponentsModule} from "./elements-components.module";
import {BrowserModule} from "@angular/platform-browser";
import {MainComponentsModule} from "./main-components.module";

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        MainComponent,
        CategorySensorComponent,
        EffectionComponent,
        FooterComponent,
        HeaderComponent,
        MyModelComponent,
        PopularSensorComponent
    ],
    imports: [
        AppRoutingModule,
        GoTopButtonModule,
        BrowserAnimationsModule,
        ElementsComponentsModule,
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCXpNCVM87m5OzYx5XBciW_n2elGQkhZZI'
        }),
        FormsModule,
        TextMaskModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MainComponentsModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ContactsService,
        GoodsService,
        SenderService,
        ContentService,
        SliderService
    ]
})
export class AppModule {
}
