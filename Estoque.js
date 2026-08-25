export default class Estoque{
    #id 
    #nome
    #quantidade
    constructor(){
        this.#quantidade = 0
    }
    //acessores para id
    set id(id){
        this.#id=id
    }
    get id(){
        return this.#id
    }
    //acessores para o nome
    set nome(nome){
        this.#nome=nome
    }
    get nome(){
        return this.#nome
    }
    // acessores para quantidade 
    // O correto para um método SET é substituir o valor antigo pelo novo
    set quantidade(quantidade){
    this.#quantidade = quantidade // Modificado de += para =
    }
    
    get quantidade(){
        return this.#quantidade
    }
       // Altere o parâmetro de (quantidade) para (valor) para evitar conflitos
    acrescentar(valor){
        this.#quantidade += valor;
    }

    // Altere o parâmetro de (quantidade) para (valor) para evitar conflitos
    retirada(valor){
        if((this.#quantidade - valor) < 0){
            this.#quantidade = 0;
        } else {
            this.#quantidade -= valor;
        }
    }
}
