import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { EntitySpcialComponent } from './component/entity-spcial/entity-spcial.component';
import { EntityFunctionComponent } from './component/entity-function/entity-function.component';

const routes: Routes = [

  {path: "", component:UserLoginComponent},
  {path: "Login" , component:UserLoginComponent},
  {path: "Register", component:UserRegisterComponent},
  {path: "Entity", component:EntitySpcialComponent},
  {path: "EntitySave", component:EntityFunctionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
