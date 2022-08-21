import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(items: any, filter: any): any {

    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.id);
  }

}
