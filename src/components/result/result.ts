import {Component, Input} from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: 'result.html'
})
export class Result {
  @Input() item;
}
