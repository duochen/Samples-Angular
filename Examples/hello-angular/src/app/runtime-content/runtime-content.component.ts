import { Component, OnInit, ViewChild, ViewContainerRef, Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-runtime-content',
  templateUrl: './runtime-content.component.html',
  styleUrls: ['./runtime-content.component.css']
})
export class RuntimeContentComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  template = '<div>\nHello, {{name}}\n</div>';

  constructor(private compiler: Compiler) { }

  ngOnInit() {
  }

  private createComponentFactorySync(
    compiler: Compiler,
    metadata: Component,
    componentClass: any): ComponentFactory<any> {

      const cmpClass = componentClass || class RuntimeComponent {
        name = "Denys";

        onClick() {
          alert('Clicked');
        }
      };

      const decoratedCmp = Component(metadata)(cmpClass);
    
      @NgModule({
        imports: [CommonModule],
        declarations: [decoratedCmp]
      })
      class RuntimeComponentModule{}

      const module: ModuleWithComponentFactories<any> = 
        compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);

      return module.componentFactories.find(
        f => f.componentType === decoratedCmp
      );
    }

    compileTemplate() {
      let metadata = {
        selector:`runtme-component-sample`,
        template: this.template
      };

      let factory = this.createComponentFactorySync(
        this.compiler,
        metadata,
        null
      );

      if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
      }
      this.componentRef = this.container.createComponent(factory);
    }
}
