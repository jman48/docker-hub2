import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { DockerService } from "../../services/docker.service";


@Component({
  selector: 'page-item-details',
  templateUrl: 'repo.html'
})
export class RepoPage {
  name: string;
  offical: string;
  repo: any;
  description: string;

  constructor(public navParams: NavParams, public dockerService: DockerService) {
    this.name = navParams.get('name');
    this.offical = navParams.get('offical');
  }

  ngOnInit() {
    this.dockerService.loadRepo(this.name, this.offical)
      .then((repo) => {
      console.log(repo);
        this.repo = repo;
        this.description = this.repo.full_description;
      });
  }
}
