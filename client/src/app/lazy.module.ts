import {NgModule} from '@angular/core';

import {routing} from './lazy.routing';
import {KidsComponent} from "./pages/kids/kids.component";
import {MainComponentsModule} from "./main-components.module";
import {LogopedComponent} from "./pages/logoped/logoped.component";
import {ExhibitionComponent} from "./pages/exhibition/exhibition.component";
import {CommercialComponent} from "./pages/commercial/commercial.component";
import {MultiComponent} from "./pages/multi/multi.component";

@NgModule({
    imports: [
        routing,
        MainComponentsModule
    ],
    declarations: [
        KidsComponent,
        LogopedComponent,
        ExhibitionComponent,
        CommercialComponent,
        MultiComponent
    ]
})
export class LazyModule {
}