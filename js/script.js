"use strict";
class Smartphone {
    constructor(credito, minutiChiamate, costoChiamate) {
        this.credito = 0;
        this.minutiChiamate = 0;
        this.costoChiamate = 0;
        this.credito = credito;
        this.minutiChiamate = minutiChiamate;
        this.costoChiamate = costoChiamate;
    }
    ricarica(soldi) {
        return this.credito += soldi;
    }
    creditoResiduo() {
        let res = this.credito - this.minutiChiamate * this.costoChiamate;
    }
    durataChiamata(minuti) {
        return this.minutiChiamate += minuti;
    }
    mostraDurataChiamate() {
        return this.minutiChiamate;
    }
    azzeraChiamate() {
        return this.minutiChiamate = 0;
    }
}
class Operatore extends Smartphone {
    creditoResiduo() {
        let res = this.credito - this.minutiChiamate * this.costoChiamate;
    }
    azzeraCredito() {
        return this.credito = 0, this.minutiChiamate = 0;
    }
    chiamata(minutes) {
        if (this.credito >= minutes * this.costoChiamate) {
            this.minutiChiamate += minutes;
            this.credito -= minutes * this.costoChiamate;
        }
    }
}
let firstUser = new Operatore(0, 0, 0.2);
let secondUser = new Operatore(0, 0, 0.2);
let thirdUser = new Operatore(0, 0, 0.2);
firstUser.ricarica(15);
firstUser.chiamata(20);
firstUser.mostraDurataChiamate();
firstUser.creditoResiduo();
secondUser.ricarica(5);
secondUser.chiamata(30);
secondUser.mostraDurataChiamate();
secondUser.creditoResiduo();
thirdUser.ricarica(52);
thirdUser.chiamata(8);
thirdUser.mostraDurataChiamate();
thirdUser.creditoResiduo();
console.log(` Il primo utente ha un credito di ${firstUser.credito}€ `);
console.log(firstUser);
console.log(` Il secondo utente ha un credito di ${secondUser.credito}€ `);
console.log(secondUser);
console.log(` Il terzo utente ha un credito di ${thirdUser.credito}€ `);
console.log(thirdUser);
