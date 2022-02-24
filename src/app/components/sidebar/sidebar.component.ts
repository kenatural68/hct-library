import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// export class Genre {
//   constructor(
//     public id: number,
//     public genre: string,
//     public stock: number
//   ) {
//   }
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // genre: string;

  @Output() genreEvent = new EventEmitter<string>();

  // genres: Genre[];

  // genres: any

  typesOfGenres: string[] = ['Action', 'Adventure', 'Biography', 'Fantasy', 'Horror', 'Science Fiction'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.getGenre();
  }

  // getGenre(){
  //   this.httpClient.get<any>('https://mocki.io/v1/54c3ce46-e4ac-4870-b8c6-3626ba4fe673').subscribe(
  //     response => {
  //       console.log(response, "Genres loaded");
  //       this.genres = response;
  //     }
  //   );
  // }

  filterGenre(genres: string){
    console.log(genres);
    this.genreEvent.emit(genres)
  }

}
