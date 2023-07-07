import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartComponent } from './hexa-sport-resa/vue/smart/smart.component';

const routes: Routes = [
    {
        path:'',
        component:SmartComponent,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadChildren: () => import('./hexa-sport-resa/vue/dumb/login/login.module').then(m => m.LoginModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
