import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
const matModules = [MatToolbarModule, MatIconModule,MatButtonModule,MatMenuModule];

@NgModule({
  declarations: [],
  imports: [CommonModule,matModules],
  exports:[matModules]
})
export class MatModule {}
