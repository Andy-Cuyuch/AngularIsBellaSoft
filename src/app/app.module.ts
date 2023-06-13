import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { EntitySpcialComponent } from './component/entity-spcial/entity-spcial.component';
import { HeaderComponent } from './component/header/header.component';
import { EntityFunctionComponent } from './component/entity-function/entity-function.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    EntitySpcialComponent,
    HeaderComponent,
    EntityFunctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
