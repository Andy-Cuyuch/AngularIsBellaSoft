import { Component,OnInit } from '@angular/core';
import { Router } from 'express';
import { EntityModel } from 'src/app/models/entity.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entity-spcial',
  templateUrl: './entity-spcial.component.html',
  styleUrls: ['./entity-spcial.component.css']
})
export class EntitySpcialComponent  implements OnInit{
  entity:EntityModel;
  task: any;

  constructor(
    private userRest: UserServicesService,
  ){
    this.entity = new EntityModel('','','','');
  }

  ngOnInit(): void {
    this.getEntity();
  }

  EntityDelete(id: string){
     this.userRest.entityDelete(id).subscribe({
      next: (res: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1000
        })
        this.getEntity();
      },
      error: (err) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.message,
        showConfirmButton: false,
        timer: 1000
      }),
    });
  }

getEntity(){
    this.userRest.entityGet().subscribe({
      next: (res: any) => this.task = res.task,
      error: (err) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.message,
        showConfirmButton: false,
        timer: 1000
      }),
    });
  }
}



