import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.styl']
})
export class RegistroComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  contrasenaFormControl = new FormControl('', [

    Validators.required,
    Validators.minLength(6)
  ]);

  constructor() { }

  ngOnInit() {
  }

}
