// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { BrowserRoutingModule } from './browser-routing.module'
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatProgressBarModule }  from '@angular/material';
import { MatTabsModule } from '@angular/material';

// Services
import { SearchService } from './services/search/search.service';
import { TermService } from './services/term/term.service';
import { GeneEntrezService } from './services/gene/gene-entrez.service';
import { DiseaseService } from './services/disease/disease.service';
// Components
import { SearchComponent } from './components/search/search.component';
import { TermComponent } from './components/term/term.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { GeneComponent } from './components/gene/gene.component';
import { BrowserComponent } from './browser.component';
// Custom Pipes
import { SortPipe } from './pipes/sort-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserRoutingModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule
  ],
  providers: [ SearchService, TermService, GeneEntrezService, DiseaseService ],
  declarations: [ SearchComponent, TermComponent, DiseaseComponent,
    GeneComponent, BrowserComponent, SortPipe ]
})
export class BrowserHPOModule { }