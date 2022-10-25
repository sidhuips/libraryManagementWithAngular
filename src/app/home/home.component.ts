import { Component, OnInit } from '@angular/core';
import { Book } from '.././models/book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private libraryService : LibraryService) { }
  books = this.libraryService.getAllBooks();

  ngOnInit(): void {
  }

}
