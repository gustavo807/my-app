import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class BookService {
  url: string = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }

  getBooks(text){
    return this.http.get<any>(`${this.url}?q=${text}`)
        .pipe(map(this.extractData),catchError(this.handleError))
  }

    protected extractData(res: Response) {
        return res || [];
    }

    protected handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return error;
    }

}
