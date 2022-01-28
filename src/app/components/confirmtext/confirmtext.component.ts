import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmtext',
  templateUrl: './confirmtext.component.html',
  styleUrls: ['./confirmtext.component.css']
})
export class ConfirmtextComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.closeAll();
  }

}
