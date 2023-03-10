import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { ClassesPageComponent } from './pages/classes-page/classes-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'students',
        component: StudentsPageComponent,
      },
      {
        path: 'classes',
        component: ClassesPageComponent,
      },
      {
        path: 'courses',
        component: CoursesPageComponent,
      }
    ]
  }

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
