import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert("Added book successfully")
  }

    genres: Genre[] = [
      {value: 'adventure-0', viewValue: 'Adventure'},
      {value: 'action-1', viewValue: 'Action'},
      {value: 'biography-2', viewValue: 'Biography'},
      {value: 'fantasy-3', viewValue: 'Fantasy'},
      {value: 'horror-4', viewValue: 'Horror'},
      {value: 'scifi-1', viewValue: 'Science Fiction'},
    ];


}
