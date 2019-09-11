import { NgModule } from '@angular/core';
import {MatCardModule,MatButtonModule,MatSortModule,MatTableModule,MatTabsModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatToolbarModule,MatPaginatorModule } from '@angular/material';
const MaterialComponents=[MatCardModule,MatSortModule,MatInputModule,MatTableModule,MatTabsModule,MatOptionModule,MatIconModule,MatSelectModule,MatButtonModule,MatToolbarModule,MatPaginatorModule 
];


@NgModule({
 
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
