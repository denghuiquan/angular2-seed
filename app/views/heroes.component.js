/**
 * HeroesComponent
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// angular 2 core components
var core_1 = require('@angular/core');
// services
var hero_service_1 = require('../services/hero.service');
// views
var hero_detail_component_1 = require('../views/hero-detail.component');
// router
var router_1 = require('@angular/router');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        // code...
    }
    // init
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // delay for 2000ms
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    HeroesComponent.prototype.gotoDetail = function (hero) {
        console.log(hero.id);
        var link = ['/detail', hero.id];
        // 路由导航至link
        this.router.navigate(link);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'app-heroes',
            /*template: `
                hello
            `,*/
            styles: ["\n\t  \n\t"],
            templateUrl: 'app/views/templates/heros.component.html',
            styleUrls: ['app/styles/heroes.component.css'],
            providers: [hero_service_1.HeroService],
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map