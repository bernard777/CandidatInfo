import { Component, OnInit } from '@angular/core';
import { Candidat } from '../model/candidat.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../services/candidat.service';
import { Technologie } from '../model/technologie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./../../styles.css']
})
export class UpdateCandidatComponent implements OnInit {

  currentCandidat: Candidat = new Candidat();

  technologies = Object.keys(Technologie);

  constructor(private activatedRoute: ActivatedRoute, private candidatService : CandidatService, private router: Router){
  }

  ngOnInit(): void {
    
    const idCandidat: number = +this.activatedRoute.snapshot.params['id'];
    this.candidatService.consulterCandidat(idCandidat).subscribe(data => {
      this.currentCandidat = data;
    });
  }

  updateCandidat(){
    this.candidatService.updateCandidat(this.currentCandidat).subscribe(
      () => {
        this.router.navigate(["candidats"]);
      }
    );
  }

  cancel() {
    this.router.navigate(['candidats']);
  }

}
