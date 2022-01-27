import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {MatStepperModule} from '@angular/material/stepper';
// import { MatLineModule } from '@angular/material/core';
// import { MatDialog } from '@angular/material/dialog';
// import '@angular/compiler';

/**
 * @title Stepper overview
 */
 @Component({
  selector: 'app-borrowform',
  templateUrl: './borrowform.component.html',
  styleUrls: ['./borrowform.component.css']
})
export class BorrowformComponent implements OnInit {
  // isLinear = false;
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;

  // constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialog) {}

  constructor(){}

  ngOnInit(): void {
      
  }

  // ngOnInit() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     firstCtrl: ['', Validators.required],
  //   });
  //   this.secondFormGroup = this._formBuilder.group({
  //     secondCtrl: ['', Validators.required],
  //   });
  // }
}

