import {Component, EventEmitter, Input, Output} from 'angular2/core';
import 'rxjs/Rx'; import 'rxjs/Rx';	

@Component({
    selector: 'stock-detail',
    template: '<h1> stock detail info comes : {{ stock?.username }} </h1> <input type=button value="Roger that!" (click)="triggerIt()" />'
})

export class StockDetailComponent
{ 
    @Input() stock: any; 

    @Output() changed = new EventEmitter<any>();

    triggerIt()
    {
		console.log("triggering event");
		this.changed.emit(this.stock);
    }
}