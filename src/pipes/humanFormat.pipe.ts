import { Pipe, PipeTransform } from '@angular/core';
import * as humanFormat from 'human-format';

@Pipe({name: 'humanformat'})
export class HumanFormat implements PipeTransform {
  transform(value: number): number {
    if (value) {
      return humanFormat(value);
    }

    return value;
  }
}
