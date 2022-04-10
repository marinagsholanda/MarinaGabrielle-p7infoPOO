class Queue{
    Pessoa: string[] = []
    maxQueue = 5
    ultimo = 0
    primeiro = 0
    nItems = 0

    isEmpty(): number{
        if(this.nItems == 0){
            return 1
        }else{
            return 0
        }
    }

    isFull(): number{
        if(this.ultimo == this.maxQueue){
            return 1
        }else{
            return 0
        }
    }

    addQueue(nome: string): void{
        if(this.isFull() == 1){
            console.log('FILA CHEIA!')
        }else{
            this.Pessoa[this.ultimo] = nome
            console.log(nome+' entrou na fila.')
            this.ultimo++
            this.nItems++
        }
    }
    
    removeQueue():string | void {
        if(this.isEmpty() == 1){
            console.log('FILA VAZIA!')
        }else{
            let temp = this.Pessoa[this.primeiro]
            console.log(this.Pessoa[this.primeiro]+' saiu da fila.')
            this.primeiro++
            this.nItems--
            return temp
        }
    }
    
    viewQueue(): void{
        if(this.isEmpty() == 1){
            console.log('FILA VAZIA!')
        }else{
            let np = this.primeiro
            for(let n=0; n < this.nItems; n++){
                console.log(this.Pessoa[np]+' está na fila.')
                np++
            }
        }
    }
}

let fila: Queue = new Queue()


fila.addQueue('Marina')
fila.addQueue('Nicole')
fila.addQueue('Noemy')
fila.addQueue('Gabriel')
console.log('-------------------------')

fila.removeQueue()
fila.removeQueue()
fila.removeQueue()
console.log('-------------------------')

fila.addQueue('Quézia')
console.log('-------------------------')

fila.viewQueue()
console.log('-------------------------')

fila.removeQueue()
fila.removeQueue()
console.log('-------------------------')

fila.viewQueue()