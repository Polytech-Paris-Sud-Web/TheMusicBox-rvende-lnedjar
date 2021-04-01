import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// @ts-ignore
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RouterModule } from '@angular/router';
import { AlbumListComponent } from './album/list/album-list.component';
import { AlbumInformationComponent } from './album/informations/album-information.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PlaylistInformationComponent } from './playlist/informations/playlist-information.component';
import { PlaylistListComponent } from './playlist/list/playlist-list.component';
import { HomeComponent } from './public-home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumInformationComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PlaylistInformationComponent,
    PlaylistListComponent,
    HomeComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
