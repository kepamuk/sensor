import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-capability',
    templateUrl: './capability.component.html',
    styleUrls: ['./capability.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapabilityComponent implements OnInit, OnDestroy {

    // capability = [{label: "Любой размер, форма и цвет", text: "Они могут быть не больше журнального столика или иметь, например, диагональ 3 метра."}];
    capability: any = [];
    @Input() imgCap;

    sub: Subscription;

    constructor(private contentService: ContentService) {
        this.sub = this.contentService.getContent()
            .subscribe(content => {
                this.capability = content[0]['capability'];
                console.log(this.capability);
            });
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}
