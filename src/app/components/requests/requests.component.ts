import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export class Borrow {
  constructor(
    public id: number,
    public name: string,
    public book: string,
    public contact: string,
    public returndate: string
  ) {
  }

}

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  durationSeconds = 5;

  borrows: Borrow[];

  constructor(private _snackBar: MatSnackBar, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getBorrow();
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

  getBorrow(){
    this.httpClient.get<any>('https://mocki.io/v1/74331efa-57d8-4053-8b05-21902bdc3e59').subscribe(
      response => {
        console.log(response, "Requests loaded");
        this.borrows = response;
      }
    );
  }

}
