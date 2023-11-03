import { Component, OnInit } from '@angular/core';
import { Candidat } from '../model/candidat.model';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-find-by-nom-candidat',
  templateUrl: './find-by-nom-candidat.component.html',
  styleUrls: ['./../../styles.css']
})
export class FindByNomCandidatComponent implements OnInit{

  candidats! : Candidat[];
  searchCandidats! : Candidat[];
  allCandidats! : Candidat[];
  searchText : string = '';

  constructor(private candidatService : CandidatService){
  }

  ngOnInit(): void {

    this.candidatService.listeCandidats().subscribe(data => {
      this.searchCandidats = data;
       
    });
  }

  chargerCandidats(){
    this.candidatService.listeCandidats().subscribe(data => {
      this.candidats = data;
    });
  }

  deleteCandidat(candidat : Candidat){
    let confirmation = confirm("Confirmez vous la suppression ?");
    if(confirmation){
      console.log("confirmation");
      this.candidatService.deleteCandidat(candidat.idCandidat).subscribe(() => console.log('Candidat Supprimé'));
      this.chargerCandidats();
    }
  }

  /* dynamicSearch(filterText : string){
    this.searchCandidats = this.allCandidats.filter(item => item.nom.toLowerCase().includes(filterText));
  } */
}
