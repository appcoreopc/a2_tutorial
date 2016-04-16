import {Http, Response} from 'angular2/http';
import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Article} from 'app/article';
import 'rxjs/Rx'; import 'rxjs/Rx';	
import {StockDetailComponent} from 'app/stockdetailcomponent';

@Component({
    selector: 'my-simple-component-limitation-offset-is-there-one',
    template: '<h1> Stock App </h1> <div> <li *ngFor="#item of info"> <div (click)="showStockDetail(item)"> {{ item.name }} </div> </li> <stock-detail (changed)="childChangedEvent($event)" [stock]="stockDetail"> </stock-detail></div>', 
    directives: [StockDetailComponent]
})

export class SimpleComponentEvent	
{ 
   
    info: Article;
    stockDetail; 

    ngOnInit()
    {
		this.getStock();
    }

    childChangedEvent(item: any)
    {
		console.log("we receive you loud and clear!!");
    }

	constructor(private http : Http)
	{
		console.log("fire up!!");
	}

	showStockDetail(item : any) {
		this.stockDetail = item;
		console.log(item);
	}

	getStock() {

	this.http.get("http://jsonplaceholder.typicode.com/users").map((res: Response) => <Article>res.json()).subscribe(
	
	data => {

		this.info = data;
	},
		err => console.log(err),
		() => console.log('done!'));
		};

}