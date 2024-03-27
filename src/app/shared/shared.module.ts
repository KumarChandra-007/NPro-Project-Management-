import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule, } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AreaComponent,
    CardComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    AreaComponent,
    CardComponent,
    PieComponent
  ]
})
export class SharedModule { }
