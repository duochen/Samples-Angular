import { Component, Compiler, ViewChild, ViewContainerRef, AfterViewInit, NgModule, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { PluginsModule } from './plugins.module';
import { SettingsComponent } from './settings/settings.component';

import { System } from 'systemjs';
declare var SystemJS: System;

interface PluginsConfig {
  system: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content', {read: ViewContainerRef, static: false})
  content: ViewContainerRef;

  private module;

  links: {text: string, path: string }[] = [];

  constructor(private compiler: Compiler, private router: Router, private http: HttpClient) {
    this.module = this.compiler.compileModuleAndAllComponentsSync(
      PluginsModule
    );

  this.createRoute('Settings', 'settings', SettingsComponent);
  }

  async ngAfterViewInit() {
    const url = '/assets/plugins.config.json';
    const config = <PluginsConfig> await this.http.get(url).toPromise();
    console.log(config);    

    SystemJS.config(config.system);

    const core = await SystemJS.import('plugins-core');
    console.log(core);
  }

  createView(name: string) {
    const factory = this.module.componentFactories.find(
      f => f.selector === name
    );
    this.content.clear();
    this.content.createComponent(factory);
  }

  createRoute(text: string, path: string, componentType: any) {
    this.router.config.unshift({
      path: path,
      component: componentType
    });

  this.links.push({text, path});
  }
}
