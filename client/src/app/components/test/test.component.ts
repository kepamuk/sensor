import {Component, ComponentFactoryResolver, ViewContainerRef, ViewChild} from '@angular/core';

@Component({
    selector: 'hello',
    template: `<h1>Hello!</h1>`
})
export class HelloComponent {
}

@Component({
    selector: 'app-test',
    template: `
    <div>
      <h2>Dynamicaly Add Elements</h2>
      <button (click)="addItem()">add hello</button>
      <template #placeholder></template>
    </div>
  `,
})
export class TestComponent {
    @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    addItem () {
        const factory = this.componentFactoryResolver.resolveComponentFactory(HelloComponent);
        this.viewContainerRef.createComponent(factory);
    }
}
