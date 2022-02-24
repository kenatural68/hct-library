import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export class History {
  constructor(
    public id: number,
    public name: string,
    public book: string,
    public borrowdate: string,
    public duedate: string,
    public returndate: string
  ) {
  }

}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historys : History[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(){
    this.httpClient.get<any>('https://mocki.io/v1/e313f124-a514-4f2a-a0db-fe587fa2b2db').subscribe(
      response => {
        console.log(response, "History loaded");
        this.historys = response;
      }
    );
  }

}
