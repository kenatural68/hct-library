import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  jjj: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', jjj: 'Accept'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',  jjj: 'Accept'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',  jjj: 'Accept'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',  jjj: 'Accept'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',  jjj: 'Accept'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',  jjj: 'Accept'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',  jjj: 'Accept'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',  jjj: 'Accept'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',  jjj: 'Accept'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',  jjj: 'Accept'},
];

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  durationSeconds = 5;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'jjj'];
  myTable = ELEMENT_DATA;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClickAccept(){
    this._snackBar.open("Accepted", "Close", {
      duration: this.durationSeconds * 1000,
    }); 
  }

  onClickDecline(){
    this._snackBar.open("Declined", "Close", {
      duration: this.durationSeconds * 1000,
    }); 
  }

}
