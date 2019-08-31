import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/shared/login/login.component';
import { AuthGuardService } from './componentes/shared/guards/auth-guard.service';
import { DashboardModule } from './componentes/dashboard/dashboard.module';
import { PageNotFoundComponent } from './componentes/shared/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

