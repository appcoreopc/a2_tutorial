import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {SecondComponent} from './secondapp.component';
import {ThirdComponent} from './third.component';
import {Home} from './home';
import {Http} from 'angular2/http';

bootstrap(AppComponent);
bootstrap(SecondComponent);
bootstrap(ThirdComponent);

console.log('loading done!');
