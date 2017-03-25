import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CutomPipe implements PipeTransform {

  transform(value: any, args1?: number, args2?: number): any {
    console.log(`Value is ${value} and args are ${args1}`);
    return parseInt(value) * args1 * args2;
  }
}
