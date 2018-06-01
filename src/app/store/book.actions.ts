import { Injectable } from '@angular/core';
import { ActionCreatorFactory } from 'ngrx-action-creator-factory';


@Injectable()
export class BookActions {
    static GET_BOOKS = '[BOOK] Books';
    static ADD_BOOKS_START = '[BOOK] Add Books Start';
    static ADD_BOOKS_DONE = '[BOOK] Add Books Done';

    //as a static method
    static GetBooks = ActionCreatorFactory.create(BookActions.GET_BOOKS);
    static AddBooksStart = ActionCreatorFactory.create(BookActions.ADD_BOOKS_START);
    static AddBooksDone = ActionCreatorFactory.create(BookActions.ADD_BOOKS_DONE);
}