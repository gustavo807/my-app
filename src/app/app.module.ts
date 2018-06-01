import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TutorialComponent } from './components/tutorial.component';
import { BookComponent } from './components/book.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*Services*/
import {BookService} from './services/book.service';

/*Redux*/
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './store/tutorial.reducer';
import { ActionCreatorFactory } from 'ngrx-action-creator-factory';
import { bookReducer } from './store/book.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BookEffect} from './store/book.effect';


@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({tutorial: reducer, book: bookReducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([BookEffect]),
    FormsModule,
    HttpClientModule
  ],
  providers: [ActionCreatorFactory,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
