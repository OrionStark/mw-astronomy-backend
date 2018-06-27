import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { MeteoriteService } from './services/meteorite.service';
import { NeoServices } from './services/neo.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { UserServices } from './services/user.service';

import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { MaterialsComponent } from './app.materials';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NeoTodayComponent } from './neo-today/neo-today.component';
import { AgmCoreModule } from '@agm/core';
import { MeteoritmapComponent } from './meteoritmap/meteoritmap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { WeeklyneoComponent } from './weeklyneo/weeklyneo.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'neo-today', component: NeoTodayComponent },
      { path: 'meteorit-lands', component: MeteoritmapComponent },
      { path: 'neo-weekly', component: WeeklyneoComponent }
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
    NeoTodayComponent,
    MeteoritmapComponent,
    MainDashboardComponent,
    WeeklyneoComponent,
  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3Rj-pp9Eevo631CC_qDZwrC3I1hA2gpk'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    }),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialsComponent,
    NgbModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ UserServices, MeteoriteService, NeoServices, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
