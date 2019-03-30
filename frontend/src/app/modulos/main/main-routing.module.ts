import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main.component';
import { GenerosComponent } from './generos/generos.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthService } from 'src/app/servicios/auth.service';
import { AuthGuard } from 'src/app/seguridad/auth.guard';


const app_routes: Routes = [
    {
        path: '',
        // loadChildren: './modulos/main/main.module#MainModule'
        component: MainComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'albunes',
                component: HomeComponent
            },
            {
                path: 'category',
                component: GenerosComponent
            },
            {
                path: 'album',
                component: AlbumComponent,
                canActivate: [AuthGuard]
            } ,
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registro',
                component: RegistroComponent
            }

        ]
     },
];

@NgModule({
    imports: [
        RouterModule.forChild(app_routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }