import { Action } from '@ngrx/store'
import { Tutorial } from './tutorial.model'
import { TutorialActions } from './tutorial.actions'

// Section 1
const initialState: Tutorial = {
    name: 'Angular',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Tutorial[] = [initialState], action) {

    // Section 3
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}