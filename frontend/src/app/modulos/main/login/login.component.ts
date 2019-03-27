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
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    /*this.formulario = fb.group({
      email: [null, Validators.email],
      contrasena: [null, Validators.compose([Validators.required,
      Validators.minLength(6)])]
    });*/
   }

  
  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public logIn() {
    const user = this.formGroup.value;
    console.log(user);
  }
}
