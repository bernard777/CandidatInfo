import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { AddCandidatComponent } from './candidats/add-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCandidatComponent } from './candidats/update-candidat.component';
import { FindByNomCandidatComponent } from './candidats/find-by-nom-candidat.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CandidatsComponent,
    AddCandidatComponent,
    UpdateCandidatComponent,
    FindByNomCandidatComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
