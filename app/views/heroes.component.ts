/**
 * HeroesComponent
 */

// angular 2 core components
import { Component, OnInit} from '@angular/core';

// models
import { Hero } from '../models/hero';

// services
import { HeroService } from '../services/hero.service';

// views
import { HeroDetailComponent } from '../views/hero-detail.component';

// router
import { Router } from '@angular/router';

@Component({
	selector: 'app-heroes',
	/*template: `
		hello
	`,*/

  	styles: [`
	  
	`],
	templateUrl: 'app/views/templates/heros.component.html',
  	styleUrls:  ['app/styles/heroes.component.css'],
	providers: [HeroService],
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
	// var defined
	selectedHero: Hero;
	public heroes: Hero[];

	constructor(
		private router: Router,
		private heroService: HeroService) {
		// code...
	}

	// init
	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { 
		this.selectedHero = hero;
	}

	getHeroes() {
		// delay for 2000ms
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
		// this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(hero: Hero) {
		console.log(hero.id)
	  	let link = ['/detail', hero.id];
	  	// 路由导航至link
	  	this.router.navigate(link);
	}

}