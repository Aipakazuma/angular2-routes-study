import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'stracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]; 

export const routing = RouterModule.forRoot(appRoutes, { useHash: true});
