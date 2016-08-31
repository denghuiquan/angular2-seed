import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from '../views/dashboard.component';
import { HeroesComponent } from '../views/heroes.component';
import { HeroDetailComponent } from '../views/hero-detail.component';

// The RouterConfig is an array of route definitions. 
const routes: RouterConfig = [
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
      component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
