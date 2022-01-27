import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BorrowformComponent } from './components/borrowform/borrowform.component';
import { RequestsComponent } from './components/requests/requests.component';
import { BorrowersComponent } from './components/borrowers/borrowers.component';
// import {MatStepperModule} from '@angular/material/stepper';
// import { MatLineModule } from '@angular/material/core';
// import { MatStepLabel } from '@angular/material/stepper';
// import { MatIconModule } from '@angular/material/icon';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    AddbooksComponent,
    FooterComponent,
    DashboardComponent,
    BorrowformComponent,
    RequestsComponent,
    BorrowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    // MatStepperModule,
    // MatLineModule,
    // MatStepLabel,
    // MatIconModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
