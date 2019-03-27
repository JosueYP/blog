import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.styl']
})
export class RegistroComponent implements OnInit {

  public formGroup: FormGroup;
  duracion: number = 5;
  constructor(private formBuilder: FormBuilder, 
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.buildForm(); 
  }

  buildForm(){    
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    })
  }

  public registro(){
    const registro = this.formGroup.value;
    console.log(registro);
    console.log("aas");
   /* this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.duracion * 1000,
    });*/
  }
}

/*@Component({
  selector: 'snack',
  templateUrl: 'snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}*/
