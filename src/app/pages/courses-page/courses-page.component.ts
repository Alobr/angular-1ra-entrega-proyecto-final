import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  courses: any;
  constructor(private readonly coursesService: CoursesService) {

    this.courses = this.coursesService.courses();
  }

}
