import {Book} from './book.model';
import {BookActions} from './book.actions';

// Section 1
const initialStateBook: Book = {
    id: '0JSFJ0JJ',
    title: 'Dead',
    description: 'Description of dead',
    thumbnail: 'www.google.com/title.jpg'
}

// Section 2
export function bookReducer(state: Book[] = [initialStateBook], action) {

    // Section 3
    switch(action.type) {
        case BookActions.ADD_BOOKS_START:
            return state;
        case BookActions.ADD_BOOKS_DONE:
            return [...action.payload];
        default:
            return state;
    }
}
