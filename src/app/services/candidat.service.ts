import { Injectable } from '@angular/core';
import { Candidat } from '../model/candidat.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  candidats! : Candidat[];

  apiURL: string = 'http://localhost:8080/candidats'; 

  constructor(private http: HttpClient) { 
  }

  listeCandidats(): Observable<Candidat[]>{
    return this.http.get<Candidat[]>(this.apiURL);
  }

  addCandidat(candidat : Candidat): Observable<Candidat>{
    return this.http.post<Candidat>(this.apiURL, candidat, httpOptions);
  }

  deleteCandidat(id: number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterCandidat(id: number): Observable<Candidat> {
    const url = `${this.apiURL}/by-id/${id}`;
    return this.http.get<Candidat>(url, httpOptions);
  }

   updateCandidat(candidat: Candidat) : Observable<Candidat> {
    const url = `${this.apiURL}/${candidat.idCandidat}`;
    return this.http.put<Candidat>(url, candidat, httpOptions); 
  }

  findByNomCandidat(searchText: string): Observable<Candidat>{
    const url = `${this.apiURL}/by-nom/${searchText}`;
    return this.http.get<Candidat>(url);
  }

  /* trierCandidats() {
    this.candidats = this.candidats.sort((a, b) => {
      // Vérifie si a et b ont la propriété idCandidat définie
      if (a && a.idCandidat && b && b.idCandidat) {
        if (a.idCandidat > b.idCandidat) {
          return 1;
        } else if (a.idCandidat < b.idCandidat) {
          return -1;
        } else {
          return 0;
        }
      } else {
        // Gérer le cas où l'une des propriétés est undefined
        return 0; // Ou renvoyez une valeur par défaut appropriée selon vos besoins
      }
    });
  } */
  
  
}

