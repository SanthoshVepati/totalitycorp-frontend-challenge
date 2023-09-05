import { Component } from '@angular/core';
import { Users } from '../models/users';
import { UserserviceService } from '../models/userservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginuser!: FormGroup;
  public inputType:string='password';
  users:Users=new Users();
  constructor(public service:UserserviceService,private route:Router,private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
     
  
    this.loginuser=this.formbuilder.group({

      email:['',Validators.required],
      password:['',Validators.required]

    })
  
  }

  onlogin(){

     this.service.users_registration(this.users).subscribe((data)=>{
      
     });    
    if(this.loginuser.valid){
     this.route.navigateByUrl('/home'); 
       }
       else
       {
    
        this.validateAllFormFields(this.loginuser);
        alert('Yours form is invaild');  
    }
    }
  
  
    private validateAllFormFields(formgroup:FormGroup){
  
      Object.keys(formgroup.controls).forEach(fields=>{
        const control= formgroup.get(fields);
        if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        }else if(control instanceof FormGroup){
          this.validateAllFormFields(control)
        }
      })
    }
  
    public changepassword(event:any):void{
      event.target.checked ? this.inputType= 'text' : this.inputType='password'
   
   }


}
