import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Component} from 'angular2/core';
import 'rxjs/Rx';import 'rxjs/Rx';

@Component({
    selector: 'my-simple-component-limitation-offset-is-there-one',
    template : '<h1> Stock App </h1>'

})

export class SimpleComponentHttp 
{ 
   
    stock; 

    ngOnInit()
    {
		this.getStock();
		///console.log('init');
    }

	constructor(private http : Http)
	{
		console.log("fire up!!");
	}

	getStock() {

	this.http.get("http://jsonplaceholder.typicode.com/posts/1").map((res: Response) => res.json())	.subscribe(
	data => {
		console.log(data.id);
		console.log(data.title);
		console.log(data);
	},
		err => console.log(err),
		() => console.log('done!'));
	};

}
