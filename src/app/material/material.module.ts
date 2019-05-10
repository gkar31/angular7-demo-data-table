import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatTableModule,
  MatChipsModule
} from '@angular/material';

const Material = [
  MatButtonModule,
  MatTableModule,
  MatChipsModule
];


@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
