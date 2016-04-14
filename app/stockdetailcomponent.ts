import {Component, Input, Output} from 'angular2/core';
import 'rxjs/Rx'; import 'rxjs/Rx';	

@Component({
    selector: 'stock-detail',
    template: '<h1> stock detail info comes : {{ stock?.username }} </h1>'
})

export class StockDetailComponent
{ 
    @Input() stock: any; 
}