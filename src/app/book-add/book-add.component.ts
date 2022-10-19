import { Component, OnInit } from '@angular/core';
import { Book } from '.././models/book';
import { LibraryService } from '../library.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  idToWork : string = "";
  showMsg: boolean = false;
  isbnExist: boolean = false;
  idEmpty: boolean = false;
  public book: Book = new Book("","","","")
  checkoutForm = this.formBuilder.group({
    id: "",
    bookName: "",
    author: "",
    type: ""
  })

  constructor(private libraryService : LibraryService, private formBuilder: FormBuilder, private router: Router) {  
       
  }
  books = this.libraryService.getAllBooks();
  ngOnInit(): void {

  }
  submitBook(): void {
    this.resetForm();
    console.log("hereee")
    let newBook: any = this.checkoutForm.getRawValue();

    this.book.setId(newBook.id);
    this.book.setAuthor(newBook.author);
    this.book.setBookName(newBook.bookName);
    this.book.setType(newBook.type);
    console.log(this.book)

    if(newBook.id == ""){
      this.idEmpty = true;
      this.router.navigate(['/product/addBook/'])
    }
 else{
    let id = 0;
    this.libraryService.saveBook(this.book).subscribe((e: any) => {
    this.checkForErrors(e['id'], newBook.id)
    });}
  }
  resetForm() : void{
    this.isbnExist = false;
    this.showMsg = false;
    this.idEmpty = false;
  }
  checkForErrors(id: string, idFromUI: string) : void{
    this.router.navigate(['/product/addBook/'])
      if(id==null)
      {
      this.isbnExist = true;
      this.idToWork = idFromUI;
      }
      if(id!=null)
      {
      this.showMsg = true;
      this.idToWork = id;
      }
    };
  
}
