import { Component } from '@angular/core';
import {BookService} from '../services/book.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-book',
    providers: [BookService],
    styles: [``],
    template: `
    <a class="" routerLink="/">Back</a>
    <br>
    <h3>Books list</h3>
    <input (keyup.enter)="get()" [(ngModel)]="text" required >
    <hr>
    <div>
        {{ result | json }}
    </div>
        
    `
})

export class BookComponent {
    text: string = '';
    result: any;
    constructor(private service: BookService){}

    get(){
        this.text ?
        this.service.getBooks(this.text)
            .subscribe(data => this.result = data, err => console.error(err))
        : console.log('nothing');
    }

}