import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {

  students: Student[] = [
    new Student(1, 'Andres', 'Garcia', 10),
    new Student(2, 'Lucia', 'Pezzulo', 10),
    new Student(3, 'Jose', 'Hernandez', 6),
    new Student(4, 'Lucas', 'Torrez', 9),
    new Student(5, 'Maria', 'Maestrecci', 4),
    new Student(6, 'Carla', 'Fernandez', 6),
    new Student(7, 'Luz', 'Peña', 10),
    new Student(8, 'Roberto', 'Quintero', 3),
    new Student(9, 'Martin', 'Zabala', 3),
  ];

  displayedColumns = ['id', 'firstName', 'lastName', 'isTopTen', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog) { }

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [...this.students, new Student(lastId + 1, value.firstName, value.lastName, value.score)];
      }
    })
  }

  deleteStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id)
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu)
      }
    })
  }


}
