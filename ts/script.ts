class Smartphone{
    credito: number = 0;
    minutiChiamate: number = 0;
    costoChiamate: number = 0;
    constructor (credito: number, minutiChiamate: number, costoChiamate: number){
        this.credito = credito; 
        this.minutiChiamate = minutiChiamate;
        this.costoChiamate = costoChiamate;
    }
    
    ricarica(soldi:number): number{
        return this.credito += soldi;
    }
    creditoResiduo(): any {
        let res = this.credito - this.minutiChiamate*this.costoChiamate;
    }
    durataChiamata(minuti:number):number{
        return this.minutiChiamate += minuti;
    }
    mostraDurataChiamate(): number {
        return this.minutiChiamate;
    }
    azzeraChiamate(): number{
        return this.minutiChiamate = 0;
    }
}

class Operatore extends Smartphone{
    creditoResiduo(): any {
        let res = this.credito - this.minutiChiamate * this.costoChiamate;
    }
    azzeraCredito(): any{
        return this.credito = 0, this.minutiChiamate = 0;
    }
    chiamata(minutes: number): any {
        if(this.credito >= minutes * this.costoChiamate){
            this.minutiChiamate += minutes;
            this.credito -= minutes * this.costoChiamate;
        }
    }
}

let firstUser = new Operatore (0, 0, 0.2)
let secondUser = new Operatore (0, 0, 0.2)
let thirdUser = new Operatore (0, 0, 0.2)
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

console.log(` Il primo utente ha un credito di ${firstUser.credito}€ `)
console.log(firstUser)
console.log(` Il secondo utente ha un credito di ${secondUser.credito}€ `)
console.log(secondUser)
console.log(` Il terzo utente ha un credito di ${thirdUser.credito}€ `)
console.log(thirdUser)

