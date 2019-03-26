import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  /*emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);*/
  //formulario: FormGroup
  constructor(private fb: FormBuilder) {
    /*this.formulario = fb.group({
      email: [null, Validators.email],
      contrasena: [null, Validators.compose([Validators.required,
      Validators.minLength(6)])]
    });*/
   }

   formulario = new FormGroup({
    emailFormControl: new FormControl(''),
    contrasena: new FormControl(''),
  });

  onSubmit(){
     console.log(this.formulario .value);
   }

  ngOnInit() {
  }

}
