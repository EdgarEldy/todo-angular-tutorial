import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor() { }
}
