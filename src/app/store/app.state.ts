import { Tutorial } from './tutorial.model';
import { Book } from './book.model';

export interface AppState {
    readonly tutorial: Tutorial[];
    readonly books: Book[];
}