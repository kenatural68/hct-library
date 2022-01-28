import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BorrowformComponent } from '../borrowform/borrowform.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  mybutton = document.getElementById("myBtn");

  constructor(private dialogRef: MatDialog) { }
  // constructor() { }

  ngOnInit(): void {
  }

  openBorrowform() {
    this.dialogRef.open(BorrowformComponent);
  }

  // window.onscroll = function() {scrollFunction()};

  // scrollFunction() {
  // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //   this.mybutton.style.display = "block";
  // } else {
  //   this.mybutton.style.display = "none";
  // }

  // topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

}
