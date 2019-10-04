import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value}`;
    return newStr;
  }
}
