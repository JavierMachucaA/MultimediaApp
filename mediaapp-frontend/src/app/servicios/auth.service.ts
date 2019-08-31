import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from '../componentes/modelos/user/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public api : string  = environment.urlApi; 
  constructor(private http: HttpClient,
              @Inject(LOCAL_STORAGE) private storage: StorageService
              
    ) {
  }
  public isAuthenticated () : boolean {
    //Get is user authenticated
    if(this.storage.get('token')!=undefined && this.storage.get('token')!=null)
      return true;  
    else
      return false;
    /*// get array of tasks from local storage
    const currentTodoList = this.storage.get(STORAGE_KEY) || [];
    // push new task to array
    currentTodoList.push({
        title: taskTitle,
        isChecked: false 
    });
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentTodoList);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');*/
  }
    
  public login(email:string, password:string ) {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      
      return this.http.post<User>(`${this.api}/login`,formData,{responseType:'json'})
          // this is just the HTTP call, 
          // we still need to handle the reception of the token
          
  }
}
