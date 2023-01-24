import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ComplaintFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
