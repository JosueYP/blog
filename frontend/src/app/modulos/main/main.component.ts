import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {
  usuario: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.usuario.subscribe(usuario => {
      this.usuario = usuario
    })
  }

}
