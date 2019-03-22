import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/servicios/genero.service';
import { Genero } from 'src/app/modelos/genero.model';



@Component({
  selector: 'generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.styl'],
  providers: [GeneroService]
})
export class GenerosComponent implements OnInit {

  generos = [
    new Genero({
      "idCategoria" : 1,
      "nombreCategoria" : "Categoria 1"
    })
  ];

  padres = []

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.generoService.buscarTodosGeneros().subscribe(
      respuesta => {
        this.generos = respuesta;
        console.log('HOLAAAA');
        console.log(this.generos);
      }
    )

    /*this.generoService.padres().toPromise()
    .then(response => this.padres = response.map(n => new Genero(n, this.generoService)))
    .then(response => this.padres.forEach(n => n.obtenerhijos()))
    .then(() => console.log(this.padres))*/


  }

}
