import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialExampleModule } from 'src/material.module';
import { DatePipe } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    OrdersComponent,
    DialogComponent,
    LogInComponent,
    RegistrationComponent,
    UserProfilComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    AppRoutingModule,
    MaterialExampleModule,
    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    

  ],
  providers: [DatePipe,OrdersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
