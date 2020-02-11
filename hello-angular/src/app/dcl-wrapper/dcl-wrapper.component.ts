import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, Input, ComponentFactory, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-dcl-wrapper',
  template: `<div #target></div>`,
})
export class DclWrapperComponent implements OnInit {
  @ViewChild('target', {
    read: ViewContainerRef
  }) target;
  @Input() type;
  cmpRef: ComponentRef;
  private isViewInitialized: boolean = false;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    const factory = this.resolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory);
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
