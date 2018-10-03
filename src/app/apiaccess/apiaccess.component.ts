import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {Observable } from "rxjs"

@Component({
  selector: 'app-apiaccess',
  templateUrl: './apiaccess.component.html',
  styleUrls: ['./apiaccess.component.css']
})
export class ApiaccessComponent implements OnInit {

  users = [];

  constructor(private api : ApiService) { }

  ngOnInit() {

    console.log("Inside the user REST API access");
   let userObservable : Observable =  this.api.getUsers();
        userObservable.subscribe(apiUsers => { // Listner for asynchrnous call
          this.users = apiUsers
          console.log("1. User Data " + this.users);
          }
          );
          

    console.log("2. User Data " + this.users);
  }

}
