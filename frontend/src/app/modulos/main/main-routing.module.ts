import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main.component';
import { GenerosComponent } from './generos/generos.component';


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