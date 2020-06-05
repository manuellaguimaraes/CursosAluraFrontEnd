import { Conta } from "./Conta/Conta.js";

export class ContaCorrente extends Conta { //herança da class Conta
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia); //chamando o constructor da class Conta
        ContaCorrente.numeroDeContas += 1; //contador para o número de conta, sempre que uma new ContaCorrente é criada contador soma 1
    }


    // sobreescrevendo o método da classe mãe (Conta)
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}