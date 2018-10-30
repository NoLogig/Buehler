import { Component } from '@angular/core';

@Component({
  selector: 'nologig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buehler';

  constructor() { }

  buehler(n: number) {

    let pmax = 0;
    let p = []; p[0] = 2; // Liste der gefundenen Primzahlen
    let psum = []; psum[0] = 0; // Liste der Summen einer gefundenen Primzahl bis zur Wurzel dr Grenzzahl
    let prim; // logische Statusletiable, Hilfsletiable
    let n_root = Math.floor(Math.sqrt(n)) + 1;	// Nur Primzahlen bis zur Wurzel

    for (let i = 3; i < n; i++) {
      let k = 0;
      prim = true;  // Status wird erst einmal auf wahr gesetzt
      while ((k < pmax) && prim && p[k] <= n_root) {
        while (psum[k] < i) { // prüfen, ob eine gefundene Primzahl an Stelle k Teiler von i ist
          psum[k] = psum[k] + p[k];
        } // durch fortlaufende Aufsummierung der Primzahl an Stelle k zur Summe an Stelle k
        if (psum[k] === i) { prim = false; } // wenn eine Primzahl an einer Stelle k Teiler von i ist, ist i nicht prim
        k++; // die nächst größere Primzahl aus dem Summenarray wird geprüft
      } // alle Primzahlen bis zur Wurzel von i sind geprüft
      if (prim) {
        pmax++; // Array-Zeiger erhöhen
        p[pmax] = i; // neue Primzahl am Ende eintragen
        psum[pmax] = 0; // an gleicher Stelle Summenelement schaffen
      }
    }

    return false;
  }
}
