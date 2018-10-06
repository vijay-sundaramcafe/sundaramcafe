import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private restHttp : HttpClient) { }

  getUsers() {
   return this.restHttp.get("https://jsonplaceholder.typicode.com/users");   
  }
}
