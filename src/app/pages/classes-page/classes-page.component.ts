import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Class } from 'src/app/models/class.model';
import { ClassesDialogComponent } from 'src/app/shared/components/classes-dialog/classes-dialog.component';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.css']
})
export class ClassesPageComponent {

  classes: Class[] = [
    new Class(1, 'Angular', 'Lunes', '20:30/22:30'),
    new Class(2, 'JavaScript', 'Lunes', '20:30/22:30'),
    new Class(3, 'Desarrollo Web', 'Martes', '20:30/22:30'),
    new Class(4, 'ReactJs', 'Martes', '20:30/22:30'),
    new Class(5, 'Angular', 'Miercoles', '20:30/22:30'),
    new Class(6, 'JavaScript', 'Miercoles', '20:30/22:30'),
    new Class(7, 'Desarrollo Web', 'Jueves', '20:30/22:30'),
    new Class(8, 'ReactJs', 'Jueves', '20:30/22:30'),
  ];

  displayedColumns = ['id', 'className', 'day', 'schedule', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog) { }

  addClass() {
    const dialog = this.dialogService.open(ClassesDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.classes[this.classes.length - 1]?.id;
        this.classes = [...this.classes, new Class(lastId + 1, value.className, value.day, value.schedule)];
      }
    })
  }

  deleteClass(clas: Class) {
    this.classes = this.classes.filter((cla) => cla.id !== clas.id)
  }

  editClass(clas: Class) {
    const dialog = this.dialogService.open(ClassesDialogComponent, {
      data: clas,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.classes = this.classes.map((cla) => cla.id === clas.id ? { ...cla, ...data } : cla)
      }
    })
  }

}