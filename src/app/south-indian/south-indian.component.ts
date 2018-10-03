import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-south-indian',
  templateUrl: './south-indian.component.html',
  styleUrls: ['./south-indian.component.css']
})
export class SouthIndianComponent implements OnInit {

  orderItems = [
    { itemid:1, itemName: "Idly", itemSpec : "Steamed and made of rice flour", itemPrice: 10, orderQuantity : 0},

    { itemid:2, itemName: "Dosa", itemSpec : "Rosted and made of rice", itemPrice: 30, orderQuantity : 0},
    { itemid:3, itemName: "Poori", itemSpec : "Atta and Wheat ", itemPrice: 30, orderQuantity : 0},
    { itemid:4, itemName: "Vada", itemSpec : "Flour with pepper", itemPrice: 10, orderQuantity : 0}
    ];

    
  constructor() {

     console.log("ItemName" + JSON.stringify(this.orderItems[1].itemName));

   }
   totalAmount = 0; 
   qtyAmount = 0;

   addQty(itemid){
     console.log(itemid);
     for(var i=0;i<this.orderItems.length;i++){
       if(this.orderItems[i].itemid === itemid){
         this.orderItems[i].orderQuantity +=1;
       }
     }
     this.qtyPrice(itemid);
     this.totalPrice();
   }
   
   qtyPrice(itemid){
    this.qtyAmount=0;
    console.log(this.qtyAmount);
    for(var i=0; i<this.orderItems.length;i++){      
      this.qtyAmount = (this.orderItems[i].itemPrice * this.orderItems[i].orderQuantity);      
    }
  }
   totalPrice(){
     this.totalAmount = 0;
      for(var i=0; i<this.orderItems.length;i++){
        this.totalAmount += (this.orderItems[i].itemPrice * this.orderItems[i].orderQuantity);
      }
   }   
   subQty(itemid){
     console.log(itemid);
     for(var i=0;i<this.orderItems.length;i++){
       if(this.orderItems[i].itemid === itemid){
         this.orderItems[i].orderQuantity -=1;
       }
     }
     this.totalPrice();
   }

  ngOnInit() {
  }

}
