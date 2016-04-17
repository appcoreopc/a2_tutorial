import {Http, Response} from 'angular2/http';
import {Component} from 'angular2/core';
import {Article} from 'app/article';
import 'rxjs/Rx'; import 'rxjs/Rx';

@Component({
    selector: 'my-simple-component-limitation-offset-is-there-one',
    template: '<h1> Stock App </h1> <div><br/><br/><input [(ngModel)]="name" type="text"> <div>{{ name }} </div></div>'
})

export class SimpleComponentBinding
{ 
   name: string; 
}
