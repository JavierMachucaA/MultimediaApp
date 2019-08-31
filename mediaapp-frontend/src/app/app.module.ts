import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';

import { MenuComponent } from './componentes/shared/menu/menu.component';
import { LoginComponent } from './componentes/shared/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './componentes/shared/page-not-found/page-not-found.component';
import { appRoutes } from './app-routing.module';
import { DashboardModule } from './componentes/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
