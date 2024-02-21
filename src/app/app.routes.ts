import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CandidateComponent } from './candidate/candidate.component';

export const routes: Routes = [
    {
        path: '',  //Home page redirected to index
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent,
        title: 'Index'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'candidate/home',
        component: CandidateComponent,
        title: 'Candidate'
    }
];
