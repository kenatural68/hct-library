import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  durationSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClick(book: string){
      this._snackBar.open(book + " added", "Close", {
        duration: this.durationSeconds * 1000,
      }); 

  }

    genres: Genre[] = [
      {value: 'adventure-0', viewValue: 'Adventure'},
      {value: 'action-1', viewValue: 'Action'},
      {value: 'biography-2', viewValue: 'Biography'},
      {value: 'fantasy-3', viewValue: 'Fantasy'},
      {value: 'horror-4', viewValue: 'Horror'},
      {value: 'scifi-5', viewValue: 'Science Fiction'},
    ];


}
