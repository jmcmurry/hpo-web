import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from "./tools-routing.module";

// Components
import { OverviewComponent } from './overview/overview.component';
import { PhenomizerComponent } from './phenomizer/phenomizer.component';
import { ExternalHPOComponent } from './externalhpo/externalhpo.component';
import { PhenogramVizComponent } from './phenogramviz/phenogramviz.component';
import { ExomiserComponent } from './exomiser/exomiser.component';
import { GenomiserComponent } from './genomiser/genomiser.component';
import { OtherComponent } from './other/other.component';
import { ClinicalAnnotationComponent } from './clinicalannotation/clinicalanno.component';
import { InternalToolsComponent } from './internaltools/internaltools.component';
import {ToolsComponent} from "./tools.component";


@NgModule({
  imports: [
    CommonModule,
    ToolsRoutingModule
  ],
  declarations: [ ToolsComponent, OverviewComponent, PhenomizerComponent, ExternalHPOComponent, PhenogramVizComponent,
    ExomiserComponent, GenomiserComponent, OtherComponent, ClinicalAnnotationComponent, InternalToolsComponent ]
})
export class ToolsModule { }
