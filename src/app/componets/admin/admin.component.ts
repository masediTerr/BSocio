import { users, contributes } from './users';
import { user,avail } from './inte';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  switchC:any='';
  switchCase='switch-cases';
  contributeTo:any='no information';
  contributes = contributes
  Users=users
  selectedUser!:user;
  toForAll = true
  toAll: boolean = false
  
  constructor() { 
    
     this.Users.forEach(async v=> {
      await v
      
    })
    
    
    console.log(this.contributes);
    
    
  }
  
  ngOnInit(): void {

    let contr = { to:this.contributeTo}
    this.selectForAll(contr)

  }

   selectedUse(user: user,to: any){
    this.toForAll = false
    this.Users.forEach(userActive=>{
      userActive.class = 'hidden'
      if (userActive.id == user.id) {
        userActive.to = to.to
        userActive.singleActive = true
        userActive.class = 'hidden'
        
      }
    })
    
  }
  route(user:user){
    this.Users.forEach(userActive=>{
      
      
      if (userActive.id == user.id) {
        if (userActive.class !='hidden') {
          userActive.class = 'hidden'
          return
        } else {
          this.Users.forEach(Xmodal=>{
            Xmodal.class='hidden'
          })
          userActive.class = 'active'
        }
      }

    })
  }
  checked(user:user){
    console.log('Individuals')
    this.Users.forEach(userActive=>{
      
      
      
      if (userActive.id == user.id) {
        if (userActive.checkedClass !='unSelect') {
          userActive.checkedClass = 'unSelect'
          console.log(userActive.id,userActive.checkedClass);
        } else {
          userActive.checkedClass = 'selected'
          console.log(userActive.id,userActive.checkedClass);
        }
      }

    })
  }
  markAll(){
    
    this.Users.forEach((users)=>{
      users.checkedClass='selected'
      
    })
    this.toAll=true
  }
  unMarkAll(){
    this.Users.forEach((users)=>{
      users.checkedClass='unSelect'
      
    })
    this.toAll=false
  }
  selectForAll(to: any){

    this.toForAll = true
    this.contributeTo = to.to

    this.Users.forEach(userActive=>{
        userActive.to = this.contributeTo
        userActive.singleActive = true
        
      
    })
  }
  tgl(){
    if(this.switchC == ''){
      this.switchC = 'active'
    }else{
      this.switchC = ''
    }
  }
  
}
