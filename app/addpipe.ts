import {Pipe, PipeTransform} from "angular2/core";


@Pipe({ name : "addup"})
export class AddUp implements PipeTransform
{
	transform(value : number, [targetvalue]): number
	{
		return value + targetvalue;
	}
}