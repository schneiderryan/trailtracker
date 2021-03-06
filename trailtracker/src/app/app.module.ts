import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './results/results.component';
import { TrailComponent } from './trail/trail.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { NgSelectModule } from '@ng-select/ng-select'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthModule } from './auth-module/auth-module.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { LocationService } from './location.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    ResultsComponent,
    TrailComponent,
    SearchBarComponent,
    ProfileComponent,
    MapComponent,
  ],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdN8iOG2eBqzlsCZFjyOIUGPwtyDJ73Ew',
      language: 'en',
      libraries: ['geometry', 'places']
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'trail',
        component: TrailComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'results',
        component: ResultsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'logout',
        redirectTo: 'home', pathMatch: 'full' 
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [GoogleMapsAPIWrapper, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
