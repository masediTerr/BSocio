import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentView!:string
  userWorkspace!:string;
  isAdmin:boolean = false
  isUser:boolean = false
  
  usermode:string= 'default'

  constructor(){ 
    
    
    
  }

  ngOnInit(): void {
    this.currentView = 'Dashboard'
    this.userWorkspace = (this.isAdmin?'Admin':this.isUser?'User':'default')
  }
  
  User(){
    this.isAdmin = false
    this.isUser = true
    this.userWorkspace = (this.isUser?'user':'default')
    
    console.log('user Mode:',this.isUser);
    console.log('admin Mode:',this.isAdmin);
    
  }
  Admin(){
    this.isUser = false
    this.isAdmin = true
    this.userWorkspace = (this.isAdmin?'admin': 'default')
    console.log('user Mode:',this.isUser);
    console.log('admin Mode:',this.isAdmin);
    
  }
  
}
