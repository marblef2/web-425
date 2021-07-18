/**
 * Title: book.interface.ts
 * Author: Fred Marble
 * Date: 24 June 2021
 * Description: This is the interface for the Books that will be used to create the Book-List
 */

export interface IBook{
  isbn: string,
  title: string,
  authors: Array<string>,
  description: string,
  numOfPages: number
}
