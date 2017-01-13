import {Injectable} from '@angular/core';
import {LoadingController} from "ionic-angular";

@Injectable()
export class LoadingService {
  private loading: boolean = false;
  private loadingDialog: any;

  constructor(private loadingCtrl: LoadingController) { };

  startLoading() {
    if (!this.loading) {
      this.loadingDialog = this.loadingCtrl.create({
        content: 'Loading...'
      });

      this.loadingDialog.present();
      this.loading = true;
    }
  }

  stopLoading() {
    if (this.loading) {
      this.loadingDialog.dismiss();
      this.loading = false;
    }
  }
}
