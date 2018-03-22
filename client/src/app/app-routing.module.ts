import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotfoundComponent} from './pages/notfound/notfound.component';
import {MainComponent} from './pages/main/main.component';
import {KidsComponent} from './pages/kids/kids.component';
import {CommercialComponent} from './pages/commercial/commercial.component';
import {ExhibitionComponent} from './pages/exhibition/exhibition.component';
import {LogopedComponent} from './pages/logoped/logoped.component';
import {MultiComponent} from './pages/multi/multi.component';

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'dlja-detej', component: KidsComponent},
    {path: 'interaktivnyj-logopedicheskij-stol', component: LogopedComponent},
    {path: 'arenda', component: ExhibitionComponent},
    {path: 'business', component: CommercialComponent},
    {path: 'multitouch', component: MultiComponent},
    {path: '**', component: MainComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}