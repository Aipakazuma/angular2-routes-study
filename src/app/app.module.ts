import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AUTH_PROVIDERS} from './auth.service';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
