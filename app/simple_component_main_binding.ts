import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {SimpleComponentBinding} from './simple_component_binding';
import {Observable} from 'rxjs/Rx';

bootstrap(SimpleComponentBinding, [HTTP_PROVIDERS]);

console.log('loading ....!');