import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Tugas3',
  templateUrl: './Tugas3.component.html',
  //styleUrls: ['./Tugas3.component.css']
  styles:[`
        .online {
            color:  white;
        }
    `]
})
export class Tugas3Component implements OnInit {
status = false;
tulisan = '';
servers = ['terserver','terserver2']
showPar = false;
log = [];

  constructor() { }

  ngOnInit() {
  }
  onCreateStatus() {
    if(this.status == false){
    this.tulisan = 'Ahmad Danial';
    this.status =true;
  }else{
      this.status = false;
      this.tulisan = '';
  }
    
    this.log.push(this.log.length+1);
  }

}