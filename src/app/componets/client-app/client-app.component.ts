import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-app',
  templateUrl: './client-app.component.html',
  styleUrls: ['./client-app.component.css']
})
export class ClientAppComponent implements OnInit {
  read:boolean = false
  user:string=`Terrence mokgope`;
  standingStatus!: string;
  
  stand = [
    
     {
      info: `Thanks for your compliant!  ${this.user}`,
      status: 'good',
      class:'c-1',
      contents: 'GOOD',
      symbol: 'ok!'

    },
    {
      info: `Don't forget to repay your Loan, Thank you!`,
      status: 'borrowed',
      class:'c-2',
      contents: 'GOOD-ON-LOAN',
      symbol: '/'
      
    },
     {
      info: 'Please make payment before due date, to avoid penalties ',
      status: 'pending',
      class:'c-3',
      contents: 'PENDING',
      symbol: '?'
    },
    {
      info: `You're requested to your fine, by Month End. Avoid complications of getting deactivated by paying in time.`,
      status: 'fined',
      class:'c-4',
      contents: 'WARNING!',
      symbol: '!!!'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.getStandind('borrowed')
  }

  getStandind(userStanding: string){

    return this.standingStatus = userStanding
  }
}
