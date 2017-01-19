import { Component } from '@angular/core';

import { ResultPage } from '../results/results';
import {NavController} from "ionic-angular";
import { DockerService } from '../../services/docker.service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchTerm: string;
  recentSearches: Array<string> = [];

  constructor(private navCtrl: NavController, private dockerService: DockerService) { }

  ionViewWillEnter() {
    this.dockerService.getRecentSearches((recent) => this.recentSearches = recent);
  }

  searchRecent(recentSearchTerm: string) {
    this.searchTerm = recentSearchTerm;

    this.search();
  }

  search(): void {
    this.navCtrl.push(ResultPage, {
      page: 1,
      searchTerm: this.searchTerm,
      order: DockerService.ORDER.ALL
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
