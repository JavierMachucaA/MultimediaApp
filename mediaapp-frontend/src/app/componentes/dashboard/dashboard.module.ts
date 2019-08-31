import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { dashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { MenuComponent } from '../shared/menu/menu.component';
import { InicioComponent } from '../inicio/inicio.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
    
  ],
  providers: [AuthGuardService,
    ],
})
export class DashboardModule { }
