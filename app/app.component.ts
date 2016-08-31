// angular 2 core components
import { Component, OnInit} from '@angular/core';

// router directive
import { ROUTER_DIRECTIVES } from '@angular/router';

// views
// import { HeroesComponent } from './views/heroes.component';
// import { HeroDetailComponent } from '../views/hero-detail.component';

// models
// import { Hero } from './models/hero';

// services
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-app',
  template: `
	<h2>NG2 Heroes<i>{{' @by ' + author}}</i></h2>
	<br/>
	<h1>{{title}}</h1>
	<nav>
		<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
		<a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
	</nav>
	<router-outlet></router-outlet>
  `,
  styles: [``],
  styleUrls: ['/styles/app.component.css'],
  // directives: [HeroesComponent, HeroDetailComponent],
  directives: [ROUTER_DIRECTIVES],
})

export class AppComponent implements OnInit{ 
	title = 'Tour of Heroes';
	author: string;

	// We could create a new instance of the HeroService with new like this:
	// heroService = new HeroService(); // don't do this

	constructor() {
		this.author = 'deng huiquan'
	}

	// init
	ngOnInit() {
		// some code here
	}

}