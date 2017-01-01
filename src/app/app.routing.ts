import {Routes, RouterModule} from "@angular/router";
import {SearchComponent} from './search/search.component';
import {AppComponent} from "./app.component";
import {TrackComponent} from "./track/track.component";
export const appRoutes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'tracks/:id',
    component: TrackComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
export const routing = RouterModule.forRoot(appRoutes);
