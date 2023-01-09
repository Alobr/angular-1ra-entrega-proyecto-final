import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MaterialModule } from './modules/material.module';
import { PagesModule } from "../pages/pages.module";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClassesDialogComponent } from './components/classes-dialog/classes-dialog.component';



@NgModule({
  declarations: [
    StudentDialogComponent,
    PageWrapperComponent,
    SidebarComponent,
    ToolbarComponent,
    ClassesDialogComponent,
  ],
  exports: [
    StudentDialogComponent,
    PageWrapperComponent,
    SidebarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesModule,
    ReactiveFormsModule,
    RouterModule,

  ]
})
export class SharedModule { }
