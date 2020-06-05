import {Conta} from "./Conta/Conta.js";

export class ContaPoupanca extends Conta{ // herança da classe Conta
    constructor(saldoInicial, cliente, agencia){ // propriedades privadas
        super(saldoInicial, cliente, agencia); // chamando o constructor da classe Conta
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}
