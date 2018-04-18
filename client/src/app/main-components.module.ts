import {NgModule} from '@angular/core';
import {SeoComponent} from "./components/seo/seo.component";
import {BackgroundComponent} from "./components/background/background.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ElementsComponentsModule} from "./elements-components.module";
import {CapabilityComponent} from "./components/capability/capability.component";
import {QuastionsComponent} from "./components/quastions/quastions.component";
import {CalcComponent} from "./shared/componentsElements/calc/calc.component";
import {FormsModule} from "@angular/forms";
import {TextMaskModule} from "angular2-text-mask";
import {VariantComponent} from "./components/variant/variant.component";
import {ProcessComponent} from "./components/process/process.component";
import {VideoComponent} from "./components/video/video.component";
import {ConfidenceComponent} from "./components/confidence/confidence.component";
import {NgxGalleryModule} from "ngx-gallery";
import {TableComponent} from "./components/table/table.component";
import {FaqComponent} from "./components/faq/faq.component";


@NgModule({
    declarations: [
        SeoComponent,
        BackgroundComponent,
        CapabilityComponent,
        QuastionsComponent,
        CalcComponent,
        VariantComponent,
        ProcessComponent,
        VideoComponent,
        ConfidenceComponent,
        TableComponent,
        FaqComponent,
    ],
    exports: [
        SeoComponent,
        BackgroundComponent,
        CapabilityComponent,
        QuastionsComponent,
        CalcComponent,
        VariantComponent,
        ProcessComponent,
        VideoComponent,
        ConfidenceComponent,
        TableComponent,
        FaqComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        ElementsComponentsModule,
        FormsModule,
        TextMaskModule,
        NgxGalleryModule,
    ]
})
export class MainComponentsModule {
}