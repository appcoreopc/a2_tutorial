import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Component} from 'angular2/core';


@Component({
    selector: 'my-simple-component-limitation-offset-is-there-one',
    template : '<h1> Stock App </h1>'

})


export class SimpleComponentHttp 
{ 
    //http://www.google.com/finance/info?q=NSE:AIAENG,ATULAUTO,<Add more NSE codes>

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

		this.http.get("http://www.google.com/finance/info?q=NSE:AIAENG,ATULAUTO,MSTF")
			.subscribe(
			data => { 
				console.log(data._body);
				console.log(data); 
			},
			err => console.log(err),
			() => console.log('done!'));
		};
}
