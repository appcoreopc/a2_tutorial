import {Component} from 'angular2/core';
import { Home} from './home';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl : 'app/app.component.html', 
    directives: [ROUTER_DIRECTIVES],
  	providers: [ROUTER_PROVIDERS] 
})

@RouteConfig([
  {path: '/home', name:'Home', component: Home }
])


export class AppComponent { }
