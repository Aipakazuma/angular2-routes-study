import {Routes, RouterModule} from "@angular/router";
import {LoggedInGardService} from "./logged-in-gard.service";
import {HomeComponent} from './home/home.component';
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {ProtectedComponent} from "./protected/protected.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGardService]
  }
];

export const routing = RouterModule.forRoot(routes);
