import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';

import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule
    ]
})

export class MaterialModule{}