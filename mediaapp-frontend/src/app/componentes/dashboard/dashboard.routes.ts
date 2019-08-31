import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { LayoutComponent } from './layout/layout.component';
import { Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';


export const dashboardRoutes: Routes = [
    {
      path: 'dashboard',
      component: LayoutComponent,
      canActivate: [AuthGuardService],
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: InicioComponent},
        
      ]
    }
  ];