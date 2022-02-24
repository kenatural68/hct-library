import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export class ListBorrow {
  constructor(
    public id: number,
    public name: string,
    public book: string,
    public duedate: string
  ) {
  }

}

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css']
})
export class BorrowersComponent implements OnInit {

  listBorrows : ListBorrow[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getListBorrow();
  }

  getListBorrow(){
    this.httpClient.get<any>('https://mocki.io/v1/74331efa-57d8-4053-8b05-21902bdc3e59').subscribe(
      response => {
        console.log(response, "Active Borrowers loaded");
        this.listBorrows = response;
      }
    );
  }


}
