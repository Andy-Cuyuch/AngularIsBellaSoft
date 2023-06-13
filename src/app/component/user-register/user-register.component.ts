import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  user:UserModel;

  constructor(
    private userRest: UserServicesService,
    private router: Router
  ){
    this.user = new UserModel('','','','','');
  }

  ngOnInit(): void {
  }

  register(registerForm:any){
    this.userRest.register(this.user).subscribe({
      next: (res:any)=>{
        Swal.fire({
          position: 'center',
          title: res.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
        return this.router.navigateByUrl('/Login');
      },
      error:(err)=>{
        registerForm.reset();
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }

}
