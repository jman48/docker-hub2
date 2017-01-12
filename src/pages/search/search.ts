import { Component } from '@angular/core';

import { ResultPage } from '../result/result';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchTerm: string;

  constructor(private navCtrl: NavController) { }

  search(): void {
    this.navCtrl.push(ResultPage, {
      page: 1,
      searchTerm: this.searchTerm
    });
  }
}
