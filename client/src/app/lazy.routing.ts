import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KidsComponent} from "./pages/kids/kids.component";
import {LogopedComponent} from "./pages/logoped/logoped.component";
import {MultiComponent} from "./pages/multi/multi.component";
import {CommercialComponent} from "./pages/commercial/commercial.component";
import {ExhibitionComponent} from "./pages/exhibition/exhibition.component";

const routes: Routes = [
    {path: 'dlja-detej', component: KidsComponent},
    {path: 'interaktivnyj-logopedicheskij-stol', component: LogopedComponent},
    {path: 'arenda', component: ExhibitionComponent},
    {path: 'business', component: CommercialComponent},
    {path: 'multitouch', component: MultiComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);