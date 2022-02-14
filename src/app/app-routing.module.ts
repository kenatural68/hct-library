import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
// import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { RequestsComponent } from './components/requests/requests.component';
// import { BorrowersComponent } from './components/borrowers/borrowers.component';
import { HomegridComponent } from './components/homegrid/homegrid.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'admin'},
  {path: 'home', component: HomegridComponent},
  // {path: 'home', component: HomeComponent},
  {path: 'admin', pathMatch: 'full', component: AdminComponent},
  // {path: 'addbooks', component: AddbooksComponent},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  // {path: 'requests', component: RequestsComponent},
  // {path: 'borrowers', component: BorrowersComponent}
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
