import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { UserService } from './models/User/user.service';
import { MeteoriteService } from './services/meteorite.service';

import { AppComponent } from './app.component';
import { MaterialsComponent } from './app.materials';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { SuninformationComponent } from './suninformation/suninformation.component';
import { NeoTodayComponent } from './neo-today/neo-today.component';
import { ProfileComponent } from './profile/profile.component';
import { GlobalchatComponent } from './globalchat/globalchat.component';
import { AgmCoreModule } from '@agm/core';
import { MeteoritmapComponent } from './meteoritmap/meteoritmap.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'suninformation', component: SuninformationComponent },
      { path: 'neo-today', component: NeoTodayComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'globalchat', component: GlobalchatComponent },
      { path: 'meteorit-lands', component: MeteoritmapComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MainComponent,
    SuninformationComponent,
    NeoTodayComponent,
    ProfileComponent,
    GlobalchatComponent,
    MeteoritmapComponent,
  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3Rj-pp9Eevo631CC_qDZwrC3I1hA2gpk'
    }),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsComponent
  ],
  providers: [ UserService, MeteoriteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
