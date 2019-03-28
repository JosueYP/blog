import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../../servicios/album.service';
import { Album } from 'src/app/modelos/album.model';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'grid-albumes',
  templateUrl: './grid-albumes.component.html',
  styleUrls: ['./grid-albumes.component.styl']
})
export class GridAlbumesComponent implements OnInit {

  albunes = [];
  visibles = [];
  items : number =  4
  usuario: any;
  constructor(private albumService: AlbumService, private auth: AuthService){}

  ngOnInit(){
    this.albumService.buscarTodosAlbumes().subscribe(respuesta =>{
      this.albunes = respuesta;
      this.insertar()
    })

    this.auth.usuario.subscribe(usuario => {
      console.log(usuario)
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
