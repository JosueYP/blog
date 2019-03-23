import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MainComponent} from './main.component'
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/material.module';
import { MenuComponent } from 'src/app/genericos/menu/menu.component';
import { PieComponent } from 'src/app/genericos/pie/pie.component';
import { SliderComponent } from './home/slider/slider.component';
import { GridAlbumesComponent } from './home/grid-albumes/grid-albumes.component';
import { GenerosComponent } from './generos/generos.component';
import { AlbumComponent } from './album/album.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MenuComponent,
    PieComponent,
    SliderComponent,
    GridAlbumesComponent,
    GenerosComponent,
    AlbumComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
})
export class MainModule { }