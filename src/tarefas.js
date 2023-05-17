class Tarefas {
    constructor() {
      this.lista = [];
    }
  
    adicionar(descricao) {
      this.lista.push({ descricao: descricao, concluida: false })
      console.log(this.lista)
    }
  
    remover(indice) {
      this.lista.splice(indice, 1);

    }
  
    todas() {
      return this.lista;
    }
  
    marcarConcluida(indice) {
      this.lista[indice].concluida = true;
    }
  }
  
module.exports = Tarefas;
  