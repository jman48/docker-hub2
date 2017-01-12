import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DockerService {
  private host: string = 'https://hub.docker.com/v2/';

  constructor(private http: Http) {};

  /**
   * Search docker hub for the supplied searchTerm.
   *
   * @param searchTerm - The search to run on docker hub
   * @param page - Optional page number
   * @returns {Promise<T>}
   */
  search(searchTerm, page = 1): Promise<any> {
    let searchUrl = `${this.host}search/repositories/?page=${page}&query=${searchTerm}`;

    return this.http.get(searchUrl)
      .toPromise()
      .then((response)=> response.json());
  }
}
