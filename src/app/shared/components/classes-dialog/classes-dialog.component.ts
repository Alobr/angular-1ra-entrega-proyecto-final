import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Class } from 'src/app/models/class.model';

@Component({
  selector: 'app-classes-dialog',
  templateUrl: './classes-dialog.component.html',
  styles: [
  ]
})
export class ClassesDialogComponent {
  classNameControl = new FormControl('')
  dayControl = new FormControl('')
  scheduleControl = new FormControl('')

  classForm = new FormGroup({
    className: this.classNameControl,
    day: this.dayControl,
    schedule: this.scheduleControl,
  })

  constructor(private readonly dialogRef:
    DialogRef, @Inject(MAT_DIALOG_DATA) public data: Class | null) {
    if (data) {
      this.classForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
