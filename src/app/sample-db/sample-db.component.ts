import { Component, OnInit } from '@angular/core';
import { DbService } from './db-service.service';

@Component({
  selector: 'app-sample-db',
  templateUrl: './sample-db.component.html',
  styleUrls: ['./sample-db.component.css']
})
export class SampleDBComponent implements OnInit {

  samplelist=[];
  sample=[];
  constructor(private dbService : DbService) { }

  ngOnInit() {
    //this.dbService.addSample();
    //console.log("Sample Service added");

    //this.dbService.updateSample("Vinoth");
    //console.log("Name Updated");

    //this.dbService.setSample();
    //console.log("Set Sample added");

    //this.dbService.deleteSample();
    //console.log("deleted");

    let sampleRef = this.dbService.getSamples();
    sampleRef.snapshotChanges().subscribe(
      list => {      //collection of data
        this.samplelist= list.map(item => {
          console.log(item.prevKey);
          return {key : item.key, ...item.payload.val()}
        });
      }
    );    
    let sampleRef1 = this.dbService.getSample("row1");
    sampleRef1.snapshotChanges().subscribe(
      list => {      //collection of data
        this.sample= list.map(item => {
          console.log(item.type);         
          return {key : item.key, ...item.payload.val()}
        });
      }
    );
  }

}
