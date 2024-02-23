import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile-component/profile-component.component';

const appRoutes: Routes = [{ path: 'profiles', component: ProfileComponent }];
@NgModule({
  declarations: [AppComponent, HeaderComponent, ProfileComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
