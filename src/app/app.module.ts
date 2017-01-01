import {NgModule} from '@angular/core';
import {CommonModule, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {BrowserModule} from "@angular/platform-browser";
import {SpotifyService} from "./spotify.service";
import {routing} from './app.routing';
import { TrackComponent } from './track/track.component';

@NgModule({
  imports: [
    routing,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent
  ],
  providers: [
    SpotifyService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
