import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
  constructor(private http: HttpClient) { }


  register(params: {}){
    return this.http.post(environment.baseUrl + 'user/Register', params, {headers: this.httpOptions} );
  }

  login(params:{}){
    return this.http.post(environment.baseUrl + 'user/Login', params, { headers: this.httpOptions });
  }

  entitySave(params:{}){
    return this.http.post(environment.baseUrl + 'entity/entitySave', params, {headers: this.httpOptions});
  }

  entityDelete(id: string){
    return this.http.delete(environment.baseUrl + 'entity/entityDelete/' + id, {headers: this.httpOptions});
  }

  entityGet(){
    return this.http.get(environment.baseUrl + 'entity/getEntity', {headers: this.httpOptions});
  }


  getToken() {
    let globalToken = localStorage.getItem('token');
    let token;
    if (globalToken != undefined) {
      token = globalToken;
    } else {
      token = ''
    }
    return token;
  }

  getIdentity() {
    let globalIdentity = localStorage.getItem('identity');
    let identity;
    if (globalIdentity != undefined) {
      identity = JSON.parse(globalIdentity);
    } else {
      identity = '';
    }
    return identity;
  }
}

