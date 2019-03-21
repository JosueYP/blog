import { AlbumService } from '../../../servicios/album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  providers: [AlbumService]
})

export class HomeComponent implements OnInit {
  albunes = []
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.buscarTodosAlbumes().subscribe(albunes => {
      this.albunes = albunes;
    })
  }

}

