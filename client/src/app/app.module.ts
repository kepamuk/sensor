import {NgModule} from '@angular/core';
import {GoTopButtonModule} from 'ng2-go-top-button';

import {AppComponent} from './app.component';
import {MainComponentsModule} from './main-components.module';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './pages/main/main.component';
import {KidsComponent} from './pages/kids/kids.component';
import {CommercialComponent} from './pages/commercial/commercial.component';
import {ExhibitionComponent} from './pages/exhibition/exhibition.component';
import {LogopedComponent} from './pages/logoped/logoped.component';
import {MultiComponent} from './pages/multi/multi.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        MainComponent,
        KidsComponent,
        CommercialComponent,
        ExhibitionComponent,
        LogopedComponent,
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
