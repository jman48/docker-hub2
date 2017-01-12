import {Injectable} from '@angular/core';
import {LoadingController} from "ionic-angular";

@Injectable()
export class LoadingService {
  private loading: boolean = false;
  private loadingCtrl: any;

  constructor(loadingCtrl: LoadingController) {
    this.loadingCtrl = loadingCtrl.create({
      content: 'Loading...'
    });
  };

  startLoading() {
    if (!this.loading) {
      this.loadingCtrl.present();
    }
  }

  stopLoading() {
    if (this.loading) {
      this.loadingCtrl.dismiss();
    }
  }
}
