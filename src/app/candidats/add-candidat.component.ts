import { Component } from '@angular/core';
import { Candidat } from '../model/candidat.model';
import { Technologie } from '../model/technologie.model';
import { CandidatService } from '../services/candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./../../styles.css']
})
export class AddCandidatComponent {

  newCandidat = new Candidat();

  technologies = Object.keys(Technologie);

  constructor(private candidatService : CandidatService, private router: Router){
  }

  addCandidat (event: Event) {
    this.candidatService.addCandidat(this.newCandidat).subscribe();
    event.preventDefault();
    this.router.navigate(["candidats"]);
  }

  cancel() {
    this.router.navigate(['candidats']);
  }
}
