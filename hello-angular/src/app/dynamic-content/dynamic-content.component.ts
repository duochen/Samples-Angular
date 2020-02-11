import { Component, OnInit, ViewChild, ViewContainerRef, Input, OnDestroy, ComponentFactoryResolver, ComponentRef } from '@angular/core';

@Component({
  selector: `app-dynamic-sample-1`,
  template: `<div>Dynamic sample 1</div>`,
})
export class DynamicSample1Component {}

@Component({
  selector: `app-dynamic-sample-2`,
  template: `<div>Dynamic sample 2</div>`,
})
export class DynamicSample2Component {}

@Component({
  selector: `app-unknown-component`,
  template: `<div>Unknown component</div>`
})
export class UnknownDynamicComponent {}

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  private componentRef: ComponentRef<{}>;

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  @Input()
  type: string;

  private mappings = {
    'sample1': DynamicSample1Component,
    'sample2': DynamicSample2Component
  };

  getComponentType(typeName: string) {
    const type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
  }

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.resolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
