import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { DockerService } from "../../services/docker.service";


@Component({
  selector: 'page-list',
  templateUrl: 'result.html'
})
export class ResultPage {
  searchTerm: string;
  page: number;
  items: Array<any>;


  constructor(public navParams: NavParams, private dockerService: DockerService) {
    this.searchTerm = navParams.get('searchTerm');
    this.page = navParams.get('page');
  }

  ngOnInit() {
    this.dockerService.search(this.searchTerm, this.page)
      .then(searchResult => this.items = searchResult.results);
  }
}
