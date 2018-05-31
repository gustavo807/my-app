import { Component, OnInit } from '@angular/core';

/*Store and Reducers*/
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../store/app.state';
import {Tutorial} from '../store/tutorial.model';
import {TutorialActions} from '../store/tutorial.actions';

@Component({
  selector: 'app-tutorial',
  styles: [``],
  template: `
  <a class="" routerLink="books">Books</a>
  <br>    
  <input (keyup.enter)="addTutorial()" [(ngModel)]="name" />

  <div class="right" *ngIf="tutorials">

      <h3>Tutorials</h3>
      <ul>
          <li *ngFor="let tutorial of tutorials | async; let i = index">
              <a [href]="tutorial.url" target="_blank">{{ tutorial.name }}</a>
              <button (click)="removeTutorial(i)">X</button>
          </li>
      </ul>

  </div>    
  `
})
export class TutorialComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  name: string = '';

  constructor(
      private store: Store<AppState>
  ) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {}

  addTutorial(){
    this.store.dispatch( TutorialActions.AddTutorial({name: this.name, url: 'www.google.com'}))
  }

  removeTutorial(index){
    this.store.dispatch( TutorialActions.RemoveTutorial(index))
  }

}
