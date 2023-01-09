import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses() {
    return [
      {
        id: 1,
        courseName: 'Angular',
        img: '../../assets/images/angular.png'
      },
      {
        id: 2,
        courseName: 'JavaScript',
        img: '../../assets/images/javascript.png'
      },
      {
        id: 3,
        courseName: 'Desarrollo Web',
        img: '../../assets/images/dw.jpg'
      },
      {
        id: 4,
        courseName: 'ReactJs',
        img: '../../assets/images/reactjs.jpg'
      },
    ]
  }
}
