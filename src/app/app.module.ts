import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NgModuleFactory} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarberComponent } from './barber/barber.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarberDetailComponent } from './barber-detail/barber-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptors} from './helpers/error.interceptors';
import {fakeBackendProvider} from './helpers/fake-backend';
import { PaymentComponent } from './payment/payment.component';
import { AfroCareComponent } from './afro-care/afro-care.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { BarbarProfileComponent } from './barbar-profile/barbar-profile.component';
import { ClientDetailByBarbersComponent } from './client-detail-by-barbers/client-detail-by-barbers.component';
import { AboutComponent } from './about/about.component';
import { RendezVousTableComponent } from './rendez-vous-table/rendez-vous-table.component';
import { HaircutPicturesComponent } from './haircut-pictures/haircut-pictures.component';
import { RendezVousConfirmationScreenComponent } from './rendez-vous-confirmation-screen/rendez-vous-confirmation-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    BarberComponent,
    DashboardComponent,
    BarberDetailComponent,
    MessagesComponent,
    SignUpComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    AfroCareComponent,
    ClientProfileComponent,
    BarbarProfileComponent,
    ClientDetailByBarbersComponent,
    AboutComponent,
    RendezVousTableComponent,
    HaircutPicturesComponent,
    RendezVousConfirmationScreenComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true},

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
