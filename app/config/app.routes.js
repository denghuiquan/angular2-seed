"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../views/dashboard.component');
var heroes_component_1 = require('../views/heroes.component');
var hero_detail_component_1 = require('../views/hero-detail.component');
// The RouterConfig is an array of route definitions. 
var routes = [
    /**
     * route definition has two parts:
    
        - path: the router matches this route's path to the URL in the browser address bar (/heroes).
    
        - component: the component that the router should create when navigating to this route (HeroesComponent).
     */
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map