import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {


	formGroup: FormGroup;
	fromControl: FormControl;

	constructor(private formBuilder: FormBuilder, private snack: MatSnackBar, private auth:AuthService) {

	}


	ngOnInit() {
		this.fromControl = new FormControl('', [Validators.required])
		this.formGroup = this.formBuilder.group({
			'email': ['', [Validators.required, Validators.email]],
			'password': this.fromControl
		})

		this.formGroup.controls['email'].valueChanges.subscribe(eventy => {
			this.snack.open(eventy, '', {duration: 2000});
		})
	}

	logIn(){
		if(this.formGroup.valid){
			this.auth.login(this.formGroup.value)
			
		}else{
			this.snack.open('Campos no validos we', 'Validar campos', {duration: 2000});
		}
	}

}
