import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BorrowformComponent } from '../borrowform/borrowform.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private dialogRef: MatDialog) { }
  constructor() { }

  // openBorrowform() {
  //   this.dialogRef.open(BorrowformComponent);
  // }

  ngOnInit(): void {
  }

}
