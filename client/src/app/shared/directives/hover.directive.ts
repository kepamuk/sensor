import {
    Directive,
    Input,
    HostListener,
    ElementRef, OnInit
} from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective implements OnInit {

    @Input() appHover;
    @Input() appStyle;

    constructor(public elementRef: ElementRef) {
    }

    @HostListener('mouseover') mouseover() {
        this.highlight(true);
    }

    @HostListener('mouseout') mouseout() {
        this.highlight(false);
    }

    private highlight(status) {
        Object.keys(this.appHover).forEach((e) => {
            this.elementRef.nativeElement.style[e] = status ? this.appHover[e] : this.appStyle[e];
        });
    }

    ngOnInit(): void {
        if (!this.appHover) this.appHover = '';
    }

}
