import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DockerService } from '../services/docker.service';
import { LoadingService } from '../services/loading.service';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { RepoPage } from '../pages/repo/repo';
import { ResultPage } from '../pages/results/results';
import { Result } from '../components/result/result';
import { HumanFormat } from '../pipes/humanFormat.pipe';
import { MarkdownParser } from '../pipes/markdown.pipe';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    RepoPage,
    ResultPage,
    Result,
    HumanFormat,
    MarkdownParser
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    RepoPage,
    ResultPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DockerService,
    LoadingService,
    Storage
  ]
})
export class AppModule {
}
