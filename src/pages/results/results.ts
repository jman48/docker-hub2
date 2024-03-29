import { Component } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';
import { DockerService } from "../../services/docker.service";
import { LoadingService } from "../../services/loading.service";

import { RepoPage } from '../repo/repo';


@Component({
  selector: 'page-list',
  templateUrl: 'results.html'
})
export class ResultPage {
  result: any;
  searchTerm: string;
  page: number;
  items: Array<any>;
  loaded: boolean = false;
  ORDERTYPES: any; //All the ordering types we can use
  selectedOrder: string;


  constructor(private navCtrl: NavController, public navParams: NavParams, private dockerService: DockerService, public loadingCtrl: LoadingService) {
    this.searchTerm = navParams.get('searchTerm');
    this.page = navParams.get('page');
    this.selectedOrder = this.navParams.get('order');
  }

  /**
   * Get all search results when we get initialised
   */
  ngOnInit() {
    this.loadingCtrl.startLoading();
    this.ORDERTYPES = DockerService.ORDER;

    this.dockerService.search(this.searchTerm, this.page, this.selectedOrder)
      .then(searchResult => {
        this.result = searchResult;
        this.items = searchResult.results;
        this.loadingCtrl.stopLoading();
        this.loaded = true;
      })
      .catch(() => this.loadingCtrl.stopLoading());
  }

  /**
   * Navigate to the next page
   */
  nextPage(): void {
    if (this.result.next) {
      this.navCtrl.push(ResultPage, {
        searchTerm: this.searchTerm,
        page: (this.page + 1),
        order: this.selectedOrder
      }, {
        animate: false
      });
    }
  }

  /**
   * Navigate back to the previous page
   */
  prevPage(): void {
    if (this.result.previous) {
      this.navCtrl.pop({
        animate: false
      });
    }
  }

  /**
   * Load a single repository
   *
   * @param repo - The repo object to load
   */
  loadRepo(repo): void {
    this.navCtrl.push(RepoPage, {
      name: repo.repo_name,
      offical: repo.is_official
    })
  }

  /**
   * Change the selectedOrder of the results
   *
   * @param order - The new selectedOrder
   */
  changeOrder(order): void {
    this.navCtrl.push(ResultPage, {
      searchTerm: this.searchTerm,
      page: 1,
      order: order
    })
  }
}
