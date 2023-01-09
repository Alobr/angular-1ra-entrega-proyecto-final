import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MaterialModule } from '../shared/modules/material.module';
import { ClassesPageComponent } from './classes-page/classes-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';



@NgModule({
  declarations: [
    StudentsPageComponent,
    ClassesPageComponent,
    CoursesPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    StudentsPageComponent,
  ]
})
export class PagesModule { }
