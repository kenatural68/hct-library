import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

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
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmtextComponent } from './components/confirmtext/confirmtext.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomegridComponent } from './components/homegrid/homegrid.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HistoryComponent } from './components/history/history.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';


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
    BorrowersComponent,
    ConfirmtextComponent,
    HomegridComponent,
    SidebarComponent,
    HistoryComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule,
    AmplifyAuthenticatorModule,
    MatRadioModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
