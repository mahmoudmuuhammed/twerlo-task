import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './components/form-group/form-group.component';



@NgModule({
  declarations: [
    FormGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormGroupComponent
  ]
})
export class SharedModule { }
