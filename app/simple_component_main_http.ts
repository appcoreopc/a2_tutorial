import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {SimpleComponentHttp} from './simple_component_http';

// HTTP_PROVIDERS
//import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

bootstrap(SimpleComponentHttp, [HTTP_PROVIDERS]);

console.log('loading ....!');