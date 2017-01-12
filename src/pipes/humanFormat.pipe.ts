import { Pipe, PipeTransform } from '@angular/core';
import * as humanFormat from 'human-format';

@Pipe({name: 'humanformat'})
export class HumanFormat implements PipeTransform {
  transform(value: number, decimals: number): number {
    if (value && decimals) {
      return humanFormat(value, {
        decimals: decimals
      });
    } else if (value) {
      return humanFormat(value);
    }

    return value;
  }
}
