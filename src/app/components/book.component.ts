import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from '../store/book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {BookActions} from '../store/book.actions';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-book',
    styles: [``],
    template: `
    <a class="" routerLink="/">Back</a>
    <br>
    <h3>Books list</h3>
    <input (keyup.enter)="query.next(textRef.value)" #textRef required >
    <button (click)="query.next(textRef.value)">Submit</button>
    <hr>
    <h3>Books</h3>
    <ul>
        <li *ngFor="let book of books | async">
            {{ book.title }}
        </li>
    </ul>   
        
    `
})

export class BookComponent implements OnInit{
    books: Observable<Book[]>;
    query = new Subject<string>();
    constructor(private store: Store<AppState>){
        this.books = store.select('book');
        this.query.subscribe(data => this.store.dispatch(BookActions.AddBooksStart({text:data})) );
    }

    ngOnInit(){}
}