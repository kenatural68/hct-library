import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmtextComponent } from '../confirmtext/confirmtext.component';

/**
 * @title Stepper overview
 */
 @Component({
  selector: 'app-borrowform',
  templateUrl: './borrowform.component.html',
  styleUrls: ['./borrowform.component.css']
})
export class BorrowformComponent implements OnInit {
  isLinear = true;
  nameFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;
  numFormGroup!: FormGroup;
  dateFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialog) {}

  // constructor(){}

  // ngOnInit(): void {
      
  // }

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
    });
    this.addressFormGroup = this._formBuilder.group({
      addressCtrl: ['', Validators.required],
    });
    this.numFormGroup = this._formBuilder.group({
      numCtrl: ['', Validators.required],
    });
    this.dateFormGroup = this._formBuilder.group({
      dateCtrl: ['', Validators.required],
    });
  }

  openDialog(){
    this.dialogRef.open(ConfirmtextComponent);
  }
}

// @Component({
//   selector: 'confirmtext',
//   templateUrl: 'confirmtext.html',
// })
// export class ConfirmText {}

