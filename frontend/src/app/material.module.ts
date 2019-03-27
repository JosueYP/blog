import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Botones, Checkbox, iconos
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';

// Menú y piel de página
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

//SnackBar
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule
    ]
})

export class MaterialModule{}