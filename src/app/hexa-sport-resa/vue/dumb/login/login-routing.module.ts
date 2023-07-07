import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from "./login.component"
import { CommonModule } from "@angular/common"

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class LoginRoutingModule { }

