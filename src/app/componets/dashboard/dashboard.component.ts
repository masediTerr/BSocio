import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bsOptions!:string;
  amountValue!:any;
  selectedOption:string=this.bsOptions
  amount:number=120;
  constructor() {
    
  }

  ngOnInit(): void {
  }



}
