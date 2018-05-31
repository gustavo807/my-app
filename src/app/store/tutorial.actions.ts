import { Injectable } from '@angular/core';
import { ActionCreatorFactory } from 'ngrx-action-creator-factory';


@Injectable()
export class TutorialActions {
    static ADD_TUTORIAL       = '[TUTORIAL] Add'
    static REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

    // as a static method
    static AddTutorial = ActionCreatorFactory.create(TutorialActions.ADD_TUTORIAL);
    static RemoveTutorial = ActionCreatorFactory.create(TutorialActions.REMOVE_TUTORIAL);
}