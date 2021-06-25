import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books!: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9781481483506',
        title: 'Uncompromising Honor',
        description: 'Latest Book in the Honor Harrington Series, this book shows the end of a major conflict, and the start of the next possible conflict.',
        numOfPages: 960,
        authors: ['David Weber']
      },
      {
        isbn: '0671578642',
        title: 'Honor of the Queen, The',
        description: 'Second book in the series. This time Honor has to defend a planet from their former fellows by herself.',
        numOfPages: 384,
        authors: ['David Weber']
      },
      {
        isbn: '067157793X',
        title: 'On Basilisk Station',
        description: 'First Book in the Honor Harrington Series. This book shows what the Royal Manticorn Navy expect out of their officers, and how they can act according to their sense of the current situation that they are facing.',
        numOfPages: 352,
        authors: ['David Weber']
      },
      {
        isbn: '9780671877934',
        title: 'In Enemy Hands',
        description: 'Honor Harrington has been sentenced to execution on a planet that her home world does not know exists. Will she and her people survive?',
        numOfPages: 544,
        authors: ['David Weber']
      },
      {
        isbn: '0545010225',
        title: 'Harry Potter and the Deathly Hallows',
        description: 'Harry, Ron and Hermione have to face many challenges to bring down He-Who-Must-Not-Be-Named. Can they concur the dragons? Break into the most secure bank in the Wizzarding World?',
        numOfPages: 784,
        authors: ['J. K. Rowling']
      }
    ]
  }

  getBooks(): Observable<IBook[]>{
    return of(this.books);
  }

  getBook(isbn: string): IBook{
    for (let book of this.books){
      if(book.isbn === isbn){
        return book;
      }
    }
    return {} as IBook;
  }
}
