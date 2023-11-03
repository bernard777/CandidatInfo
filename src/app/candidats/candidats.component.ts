import { Component, OnInit } from '@angular/core';
import { Candidat } from '../model/candidat.model';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./../../styles.css']
})
export class CandidatsComponent implements OnInit {


  candidats : Candidat[];
  searchText : string = '';
  
  constructor(private candidatService : CandidatService) {
    this.candidats = [];
  }

  ngOnInit(): void {

    this.chargerCandidats();
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

}
