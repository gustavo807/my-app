import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TutorialComponent } from './components/tutorial.component';
import {BookComponent} from './components/book.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/*Redux*/
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './store/tutorial.reducer';
import {FormsModule} from '@angular/forms';
import {ActionCreatorFactory} from 'ngrx-action-creator-factory';


@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({tutorial: reducer}),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    HttpClientModule
  ],
  providers: [ActionCreatorFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
