import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import {BookService} from '../services/book.service';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {BookActions} from './book.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class BookEffect {
    constructor(
        private readonly store: Store<AppState>,
        private readonly actions$: Actions,
        private readonly service: BookService
    ){}

    @Effect({ dispatch: false })
    bookgetEffect$: any =
        this.actions$
            .ofType(BookActions.ADD_BOOKS_START)
            .map(toPayload)
            .do((payload) => {
                this.service.getBooks(payload.text)
                    .subscribe((data : any) => {
                        this.store.dispatch(BookActions.AddBooksDone(data));
                    }, (error: any) => console.log(error));

            });

}