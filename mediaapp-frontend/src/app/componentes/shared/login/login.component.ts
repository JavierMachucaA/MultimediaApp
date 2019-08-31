import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { NameRoutes } from 'src/app/utils/constants.utils';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public TOKEN = 'token';

  constructor(
    private fb:FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) 
  {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
   }

  ngOnInit() {}

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      
        this.authService.login(val.email, val.password)
            .subscribe(
                (response : any) => {
                    console.log("User is logged in");
                    this.router.navigateByUrl(NameRoutes.ROUTES.inicio);
                    if(response.status ){
                        this.storage.set(this.TOKEN, response.token);
                    }
                },
                (error)=>{
                  console.log(error);
                }
            );
    }
  }

}
