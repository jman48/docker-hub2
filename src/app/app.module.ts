import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ItemDetailsPage } from '../pages/repo/repo';
import { ResultPage } from '../pages/results/results';
import { Result } from '../components/result/result';
import { HumanFormat } from '../pipes/humanFormat.pipe';

import { DockerService } from '../services/docker.service';
import { LoadingService } from '../services/loading.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ItemDetailsPage,
    ResultPage,
    Result,
    HumanFormat
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ItemDetailsPage,
    ResultPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DockerService,
    LoadingService
  ]
})
export class AppModule {
}
