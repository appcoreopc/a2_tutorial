import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {SimpleComponentEvent} from './simple_component_event';
import {Observable} from 'rxjs/Rx';

bootstrap(SimpleComponentEvent, [HTTP_PROVIDERS]);

console.log('loading ....!');