import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin.component';
import { MemberComponent } from './member.component';
import { LibrarianPanelComponent } from './librarianPanel.component';
import { MemberRegisterComponent } from './memberRegister.component';
import { MemberPanelComponent } from './memberPanel.component';
import { AdminRegisterComponent } from './adminRegister.component';

export const appRoutes: Route[] = [
    {path:'dashboard', component:DashboardComponent},
    {path:'admin', component:AdminComponent},
    {path:'member', component:MemberComponent},
    {path:'librarianPanel', component:LibrarianPanelComponent},
    {path:'memberRegister', component:MemberRegisterComponent},
    {path:'memberPanel', component:MemberPanelComponent},
    {path:'adminRegister', component:AdminRegisterComponent}

];
