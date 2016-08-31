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
// router directive
var router_1 = require('@angular/router');
var AppComponent = (function () {
    // We could create a new instance of the HeroService with new like this:
    // heroService = new HeroService(); // don't do this
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.author = 'deng huiquan';
    }
    // init
    AppComponent.prototype.ngOnInit = function () {
        // some code here
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<h2>NG2 Heroes<i>{{' @by ' + author}}</i></h2>\n\t<br/>\n\t<h1>{{title}}</h1>\n\t<nav>\n\t\t<a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n\t\t<a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\">Heroes</a>\n\t</nav>\n\t<router-outlet></router-outlet>\n  ",
            styles: [""],
            styleUrls: ['/styles/app.component.css'],
            // directives: [HeroesComponent, HeroDetailComponent],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map