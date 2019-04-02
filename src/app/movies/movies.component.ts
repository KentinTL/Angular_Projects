import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  title = 'My movies list';

  effetHover = true;

  showMovie: boolean;

  displayList() {
    this.showMovie = !this.showMovie;
  }
  constructor() { }

  ngOnInit() {
  }

}
