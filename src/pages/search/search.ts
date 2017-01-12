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

  /**
   * Kick of a search when user hits the enter key
   * @param keyCode
   */
  searchOnEnter(keyCode): void {
    //13 is key code for the enter key
    if(keyCode === 13) {
      this.search();
    }
  }
}
