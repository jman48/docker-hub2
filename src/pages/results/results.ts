import { Component } from '@angular/core';

import {NavParams, NavController} from 'ionic-angular';
import { DockerService } from "../../services/docker.service";


@Component({
  selector: 'page-list',
  templateUrl: 'results.html'
})
export class ResultPage {
  result: any;
  searchTerm: string;
  page: number;
  items: Array<any>;


  constructor(private navCtrl: NavController, public navParams: NavParams, private dockerService: DockerService) {
    this.searchTerm = navParams.get('searchTerm');
    this.page = navParams.get('page');
  }

  /**
   * Get all search results when we get initialised
   */
  ngOnInit() {
    this.dockerService.search(this.searchTerm, this.page)
      .then(searchResult => {
        this.result = searchResult;
        this.items = searchResult.results;
      });
  }

  /**
   * Navigate to the next page
   */
  nextPage(): void {
    if (this.result.next) {
      this.navCtrl.push(ResultPage, {
        searchTerm: this.searchTerm,
        page: (this.page + 1)
      }, {
        animate: false
      });
    }
  }

  /**
   * Navigate back to the previous page
   */
  prevPage() : void {
    if (this.result.previous) {
      this.navCtrl.pop({
        animate: false
      });
    }
  }
}
