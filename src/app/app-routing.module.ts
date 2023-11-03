import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatsComponent } from './candidats/candidats.component';
import { AddCandidatComponent } from './candidats/add-candidat.component';
import { UpdateCandidatComponent } from './candidats/update-candidat.component';
import { FindByNomCandidatComponent } from './candidats/find-by-nom-candidat.component';

const routes: Routes = [
  {path: "candidats", component: CandidatsComponent},
  {path: "addCandidat", component: AddCandidatComponent},
  {path: "", redirectTo: "candidats", pathMatch: "full"},
  {path: "updateCandidat/:id", component: UpdateCandidatComponent},
  {path: "findByNomCandidat", component: FindByNomCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
