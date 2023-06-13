import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityModel } from 'src/app/models/entity.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-entity-function',
  templateUrl: './entity-function.component.html',
  styleUrls: ['./entity-function.component.css']
})
export class EntityFunctionComponent implements OnInit{
  entity:EntityModel;
  
  constructor(
    private userRest: UserServicesService,
    private router: Router
  ){
    this.entity = new EntityModel('','','','',);
  }

  ngOnInit(): void {
  }

  entitySave(entitySaveForm:any){
    this.userRest.entitySave(this.entity).subscribe({
      next: (res:any)=>{
        Swal.fire({
          position: 'center',
          title: res.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
      },
      error:(err)=>{
        entitySaveForm.reset();
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



