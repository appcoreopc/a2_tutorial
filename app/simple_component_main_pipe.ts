import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {SimpleComponentPipe} from './simple_component_pipe';


bootstrap(SimpleComponentPipe, [HTTP_PROVIDERS]);
console.log('loading ....!');