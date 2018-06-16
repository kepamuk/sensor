import {NgModule} from '@angular/core';
import {GoTopButtonModule} from 'ng2-go-top-button';

import {AppComponent} from './app.component';
import {MainComponentsModule} from './main-components.module';
import {AppRoutingModule} from './app-routing.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KidsComponent} from './pages/kids/kids.component';
import {MainComponent} from './pages/main/main.component';
import {MultiComponent} from './pages/multi/multi.component';
import {CommercialComponent} from './pages/commercial/commercial.component';
import {ExhibitionComponent} from './pages/exhibition/exhibition.component';
import {LogopedComponent} from './pages/logoped/logoped.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        KidsComponent,
        LogopedComponent,
        ExhibitionComponent,
        CommercialComponent,
        MultiComponent
    ],
    imports: [
        MainComponentsModule,
        AppRoutingModule,
        GoTopButtonModule,
        BrowserAnimationsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
