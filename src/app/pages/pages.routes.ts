import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';

const pagesRoutes:Routes = [
    {     
        path: '', 
        component: PagesComponent,
        children: [
            { path:'progress', component: ProgressComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas', component: Graficas1Component },
            { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);