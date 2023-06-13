import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  user: UserModel

  constructor(private userRest:UserServicesService, private router: Router){
    this.user = new UserModel('','','','','');
  }

  ngOnInit(): void {
  }

  login(loginForm:any){
    this.userRest.login(this.user).subscribe({
      next: (res:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1000
        })
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.alreadyEmpresa));
        this.router.navigateByUrl('/Entity');
      },
      error: (err)=>{
        loginForm.reset();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message,
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
   }

}
