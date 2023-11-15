import { AuthService } from './../../auth.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TokenInterface } from './../../../interface/token-interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb : FormBuilder, private  auth : AuthService ,  private act : Router){}

  ngOnInit(): void {

    const token = localStorage.getItem("token_auth");
    if(token){
      this.act.navigate(["producto"]);
    }
  }
  form = this.fb.group({
    email : [""],
    password: [""]
  });

  enviar(){
    this.auth.getToken(this.form.value).subscribe((arg : TokenInterface) => {
      localStorage.setItem('token_auth',arg.access_token);
      this.act.navigate(["producto"])
    },(err : any)=>{
      console.log(err);
    });

  }

}
