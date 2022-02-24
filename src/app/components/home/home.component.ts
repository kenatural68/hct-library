import { style } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BorrowformComponent } from '../borrowform/borrowform.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public genre: string,
    public stock: number,
    public imageLink: string
  ) {
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  mybutton = document.getElementById("myBtn");
  url = "http://libpocenv2-env.us-west-1.elasticbeanstalk.com/libpoc/bookapi/books";
  durationSeconds = 5;
  books: Book[];


  constructor(private dialogRef: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar) { }
  // constructor() { }

  @Input() genres: string ;

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.httpClient.get<any>(`${this.url}`).subscribe(
      response => {
        console.log(response, "Homescreen loaded");
        this.books = response;
      }
    );
  }

  // searchBook(value: string, title: string){
  //   if (value = title){
  //     this.httpClient.get<any>(`${this.url}`).subscribe(
  //       response => {
  //         console.log(title, " loaded");
  //         this.books = response;
  //       }
  //     );
  //   }
  //   else{
  //     this._snackBar.open("Search for something", "Close", {
  //       duration: this.durationSeconds * 1000,
  //     }); 
  //   }
  // }

  openBorrowform() {
    this.dialogRef.open(BorrowformComponent);
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  receiveGenre($event:string){
    this.genres = $event
    console.log(this.genres)
    this.httpClient.get<any>(`${this.url}/${this.genres}`).subscribe(
      response => {
        console.log(response, "Homescreen reloaded");
        this.books = response;
      }
    );
  }


  // getBook(){
  //   this.httpClient.get<any>('https://mocki.io/v1/ed0926a2-853d-4c56-ba09-b873a249094e').subscribe(
  //     response => {
  //       console.log(response, "Homescreen loaded");
  //       this.books = response;
  //     }
  //   );
  // }


}
