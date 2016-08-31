// app.module.ts
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './mocks/in-memory-data.service';

import { AppComponent }   from './app.component';
import { routing }        from './config/app.routing';

// import { appRouterProviders } from './config/app.routes';
import { HeroesComponent } from './views/heroes.component';
import { HeroDetailComponent } from './views/hero-detail.component';
import { DashboardComponent } from './views/dashboard.component';

import { HeroService }  from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  providers: [
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
