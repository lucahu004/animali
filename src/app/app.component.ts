import { Component } from '@angular/core';
import { Animale } from './models/animale.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animali: Animale[] = [
    {
       "nome": "cane",
       "verso": "bau",
       "zampe": 4,
       "movimento": "cammina"
    },
    {
       "nome": "rana",
       "verso": "cra",
       "zampe": 4,
       "movimento": "salta"
    },
    {
       "nome": "canarino",
       "verso": "fiu",
       "zampe": 2,
       "movimento": "vola"
    },
    {
       "nome": "serpente",
       "verso": "fss",
       "zampe": 0,
       "movimento": "striscia"
    }
 ];

  constructor(){
    
  }

  sortedAnimali(){
    return this.animali = this.animali.sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
