// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticRoutingModule } from './static-routing.module';

import { HelpModule } from './help/help.module';
import { ToolsModule } from "./tools/tools.module";
import { SearchModule } from "../shared/search/search.module";
// GlobalMaterialModules
import { GlobalMaterialModules} from "../shared/modules/global.module";
// Components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './help/contact/contact.component';
import { CitationComponent } from './resources/citation/citation.component';
import { LicenseComponent } from './resources/license/license.component';
import { FaqComponent } from './resources/faq/faq.component';
// Pipe
import {SearchService} from "../shared/search/service/search.service";
import {NewsComponent} from "./news/news.component";
import {DownloadsComponent} from "./downloads/downloads.component";
import {NewsService} from "../shared/news/news.service";

@NgModule({
  imports: [
    CommonModule,
    HelpModule,
    ToolsModule,
    GlobalMaterialModules,
    SearchModule,
    StaticRoutingModule,
  ],
  declarations: [ HomeComponent,
    ContactComponent, CitationComponent, LicenseComponent,
    FaqComponent, NewsComponent, DownloadsComponent
  ],
  providers:[SearchService, NewsService]
})
export class StaticModule { }
