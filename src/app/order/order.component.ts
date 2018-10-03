import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  deliveryType="Home Delivery";

  constructor() { }

  ngOnInit() {
  }

  createOrder(formValues){
    alert("Your Order Created");
    console.log("button clicked " + formValues.deliveryType + " "+formValues.Qty+" " +formValues.prc);
  }
}
