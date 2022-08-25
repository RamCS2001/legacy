import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GroupEventsComponent } from './group-events/group-events.component';
import { IndividualEventsComponent } from './individual-events/individual-events.component';
import { EventComponent } from './event/event.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DbUtilityService } from './db-utility.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { ParticipateComponent } from './participate/participate.component';
import { ParticipatesComponent } from './participates/participates.component';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
import { ExcelService } from './excel.service';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GroupEventsComponent,
    IndividualEventsComponent,
    EventComponent,
    HeaderContentComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ParticipateComponent,
    ParticipatesComponent,
    AdminComponent,
    ListComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DbUtilityService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true}, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
