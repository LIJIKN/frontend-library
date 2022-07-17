import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../serive.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url="./assets/images/image/logo3.jpg";
title = 'project';
    user={
      email:'',
      pass:''
  }
  
 constructor(private serv:SeriveService,private rout:Router) { }

  ngOnInit(): void {
  }
  onsubmit(){
    
    this.serv.onsubmit(this.user).subscribe(res=>{
      localStorage.setItem('token',res.token)
      this.rout.navigate(["book"]);
    })
    
    
  }
}
