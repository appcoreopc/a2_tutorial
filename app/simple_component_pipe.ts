import {Http, Response} from 'angular2/http';
import {Component, EventEmitter, Input, Output} from 'angular2/core';
import 'rxjs/Rx'; import 'rxjs/Rx';	
import {AddUp} from 'app/addpipe'

@Component({
    selector: 'my-simple-component-limitation-offset-is-there-one',
    template: '<div><ul><li> {{ currentDate | date:"medium" }} </li><li> {{ currentDate|date:"long"}}</li><li> {{ currentDate | date:"yMMd" }} </li>  <li> {{ 1 | addup: 10 }} </li>  </ul> <div>', 
    pipes : [AddUp]
})

export class SimpleComponentPipe	
{ 
   
    currentDate : Date; 

    ngOnInit()
    {
		this.currentDate = new Date();
    }

	constructor(private http : Http)
	{
		this.currentDate = new Date();
	}

}