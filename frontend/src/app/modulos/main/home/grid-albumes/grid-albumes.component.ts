import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../../servicios/album.service';
import { Album } from 'src/app/modelos/album.model';

@Component({
  selector: 'grid-albumes',
  templateUrl: './grid-albumes.component.html',
  styleUrls: ['./grid-albumes.component.styl']
})
export class GridAlbumesComponent implements OnInit {

  albunes = [];
  visibles = [];
  items : number =  4

  constructor(private albumService: AlbumService){}

  ngOnInit(){
    this.albumService.buscarTodosAlbumes().subscribe(respuesta =>{
      this.albunes = respuesta;
      this.insertar()
    })

    console.log(this)
  }

  insertar(){
      this.albunes.forEach((n, key) => {
          console.log(key)
          console.log(this.items)
          if(key > this.items){
              this.visibles.push(n)
          }
      })
  }






}
