import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/modelos/usuario.model';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.styl']
})

export class LoginComponent implements OnInit {

	formGroup: FormGroup;
	fromControl: FormControl;
	email: string;
	contrasena: string;

	usuario: Usuario = new Usuario({
		"email": "josueyepezponce@hotmail.com",
		"contrasena": "1234"
	});

	constructor(private formBuilder: FormBuilder, private snack: MatSnackBar, 
		private auth:AuthService, private router: Router) {

	}

	ngOnInit() {
		this.fromControl = new FormControl('', [Validators.required])
		this.formGroup = this.formBuilder.group({
			'email': ['', [Validators.required, Validators.email]],
			'password': ['',[Validators.minLength(4), Validators.required]]
		})
	}

	logIn(){
		if(this.formGroup.valid){			
			console.log('Valores del formulario: ');
			this.auth.login(this.formGroup.value);
			console.log(this.formGroup.value);
			// this.email = this.formGroup.controls['email'].value;
			// this.formGroup.controls['contrasena'].value;

			// console.log('email ' + this.email);
			// //this.auth.login(this.formGroup.value)
			// console.log('Test' + this.auth.login(this.email, this.contrasena));
		}else{
			this.snack.open('Campos no validos', 'Validar campos', 
			{duration: 2000});
		}
	}

}
