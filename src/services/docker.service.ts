import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Storage } from "@ionic/storage";

@Injectable()
export class DockerService {
  private host: string = 'https://hub.docker.com/v2/';
  private recent: Array<string> = [];
  public static readonly ORDER: any = {ALL: '-all', STARS: '-star_count', DOWNLOADS: '-pull_count'};

  constructor(private http: Http, private storage: Storage) {
    this.storage.set('recent', []);
  };

  /**
   * Search docker hub for the supplied searchTerm.
   *
   * @param searchTerm - The search to run on docker hub
   * @param page *{Optional} - Optional page number
   * @returns {Promise<T>}
   */
  search(searchTerm, page = 1, order='ALL'): Promise<any> {
    let searchUrl = `${this.host}search/repositories/?page=${page}&query=${searchTerm}&ordering=${order}`;

    if (page === 1) {
      this.addToRecent(searchTerm);
    }

    return this.http.get(searchUrl)
      .toPromise()
      .then((response)=> response.json());
  }

  /**
   * Load a single docker hub repo
   *
   * @param name - Name of the repository
   * @param official - Whether it is an offical repo or not
   * @param selectedOrder *{Optional} - How to selectedOrder the results
   * @returns {Promise<T>} - Returns a promise that resolves with the pages html (due to docker hubs api)
   */
  loadRepo(name, official) {
    let repoUrl = `${this.host}repositories/`;

    if (official !== 'false') {
      repoUrl += 'library/';
    }

    repoUrl += `${name}`;

    return this.http.get(repoUrl)
      .toPromise()
      .then((response) => response.json());
  }

  getRecentSearches(callback: (result: any) => {}): void {
    this.storage.get('recent').then(recent => callback(recent));
  }

  private addToRecent(search: string) {
    this.storage.get('recent').then(recent => {

      if (recent.indexOf(search) < 0) {
        recent.unshift(search);

        //Limit recent searches to 10
        if (recent.length > 10) {
          recent.pop();
        }

        this.storage.set('recent', recent);
      }
    });
  }
}
