import { getLocaleExtraDayPeriods } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

// Setting up headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Get todos api
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  // Inject the http object for request
  constructor(private http: HttpClient) { }

// Get todos
getTodos(): Observable<Todo[] > {
  return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
}
