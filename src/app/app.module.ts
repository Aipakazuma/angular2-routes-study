import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {BrowserModule} from "@angular/platform-browser";
import {ProtectedComponent} from './protected/protected.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {routing} from './app.routing';
import {AUTH_PROVIDERS} from "./injectable";

@NgModule({
  imports: [
    routing,
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  providers: [
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
