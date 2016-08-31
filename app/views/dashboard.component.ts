// DashboardComponent
import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  template: '<h3>My Dashboard</h3>',
  templateUrl: './templates/dashboard.component.html',
  providers: [ HeroService ]
})


export class DashboardComponent { 


	constructor(
	  	private router: Router,
	  	private heroService: HeroService) {
	}


	gotoDetail(hero: Hero) {
	  	let link = ['/detail', hero.id];
	  	this.router.navigate(link);
	}

}
