import { Component, OnInit } from '@angular/core';
import { Book } from '.././models/book';
import { LibraryService } from '../library.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  idToWork : string = "";

  showMsg: boolean = false;
  noBookFound: boolean = false;
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
      this.router.navigate(['/product/updateBook/'])
    }
 else{
    let id = 0;
    this.libraryService.updateBook(this.book).subscribe((e: any) => {
    this.checkForErrors(e['id'], newBook.id)
    });}
  }
  resetForm() : void{
    this.noBookFound = false;
    this.showMsg = false;
    this.idEmpty = false;
  }
  checkForErrors(id: string, idFromUI: string) : void{
    this.router.navigate(['/product/updateBook/'])
      if(id==null)
      {
      this.noBookFound = true;
      this.idToWork = idFromUI;
      }
      if(id!=null)
      {
        this.idToWork = id;
      this.showMsg = true;
      }
    };

}
