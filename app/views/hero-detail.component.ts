import { Component, EventEmitter, Input , Output, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

// services
import { HeroService } from '../services/hero.service'


// models
import { Hero } from '../models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/views/templates/hero-detail.conponent.html',
  styleUrls: ['app/styles/hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit, OnDestroy {
	// instead of the input by service
	@Input() hero: Hero;
  	@Output() close = new EventEmitter();
  	error: any;
  	navigated = false; // true if navigated here

	// hero: Hero;
  	sub: any;

	constructor(
		private heroService: HeroService,
	  	private route: ActivatedRoute ) {
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
		  	if (params['id'] !== undefined) {
		        let id = +params['id'];
		        this.navigated = true;
		        this.heroService.getHero(id)
		            .then(hero => this.hero = hero);
		    } else {
		        this.navigated = false;
		        this.hero = new Hero();
		    }
		});
	}

	ngOnDestroy() {
	  	this.sub.unsubscribe();
	}

	save() {
	    this.heroService
	        .save(this.hero)
	        .then(hero => {
	          this.hero = hero; // saved hero, w/ id if new
	          this.goBack(hero);
	        })
	        .catch(error => this.error = error); // TODO: Display error message
	}


	goBack(savedHero: Hero = null) {
	  	this.close.emit(savedHero);
    	if (this.navigated) { window.history.back(); }
	}
}
