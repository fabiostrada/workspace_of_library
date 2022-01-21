import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JodaLibService {
  
  public bestProposition(): string {
      return "La grandezza non conta. Guarda me. Giudichi forse me dalla grandezza? Hmm? Hmm. Non dovresti farlo, infatti. Perché mio alleato è la Forza. Ed un potente alleato essa è";
  }

}
