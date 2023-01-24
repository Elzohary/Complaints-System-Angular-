import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreFormComponent } from './Components/form/Components/pre-form/pre-form.component';
import { FormComponent } from './Components/form/form.component';
import { HomeComponent } from './Components/home/home.component';
import { ComplaintFormComponent } from './user/complaint-form/complaint-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'pre-complaint', component: PreFormComponent },
  { path: 'Complaint', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
