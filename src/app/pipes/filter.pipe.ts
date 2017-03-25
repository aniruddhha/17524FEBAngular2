import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], args?: any): any {
    let filtered = [];
    if (value.length === 0) {
      return value;
    }
    value.forEach(el => {
      if (el.charAt(0) === 'a' || el.charAt(0) === 'A')
        filtered.push(el);
    });
    return filtered;
  }
}
