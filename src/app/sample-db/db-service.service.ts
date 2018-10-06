import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  sampleRef : AngularFireList<any> ;

  constructor(private db : AngularFireDatabase) {
    this.sampleRef = this.db.list("sample");
   }

   addSample(){
     this.sampleRef.push({name: "Vijay", dob: '10-06-2018'});
   }

   updateSample(updatedname){
     this.sampleRef.update("row1", {name: updatedname})
   }

   setSample(){
     this.sampleRef.set("-LO9H6HqfOuRbchmeomd",{name:"Badri"});
   }

   deleteSample(){
     this.sampleRef.remove("-LO9HIKC-Tmjq8glkCwH");
   }

   getSamples(){
    return this.sampleRef;
   }

   getSample(key){
     return this.db.list("sample",ref=> ref.orderByKey().equalTo(key));
   }
}
