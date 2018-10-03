import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {

  deliveryType="Home Delivery";

  constructor() { }

  ngOnInit() {    
  }
  createOrder(formValues){
    alert("Your Order Created");
    console.log("button clicked " + formValues.deliveryType + " "+formValues.Qty+" " +formValues.prc);
  }
}
