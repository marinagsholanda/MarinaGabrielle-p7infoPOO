"use strict";
class Stack {
    constructor() {
        this.stack = [];
        this.topo = -1;
        this.maxStack = 4;
    }
    isEmpty() {
        if (this.topo == -1) {
            return 1;
        }
        else {
            return 0;
        }
    }
    isFull() {
        if (this.topo == this.maxStack) {
            return 1;
        }
        else {
            return 0;
        }
    }
    push(num) {
        if (this.isFull() == 1) {
            console.log('PILHA CHEIA!');
        }
        else {
            this.topo++;
            this.stack[this.topo] = num;
            console.log('ELEMENTO ' + num + ' INSERIDO!');
        }
    }
    pop() {
        if (this.isEmpty() == 1) {
            console.log('PILHA VAZIA');
        }
        else {
            let aux = this.stack[this.topo];
            console.log('ELEMENTO ' + aux + ' RETIRADO!');
            this.topo--;
            return aux;
        }
    }
    view() {
        if (this.isEmpty() == 1) {
            console.log('PILHA VAZIA!');
        }
        else {
            for (let n = 0; n <= this.topo; n++) {
                console.log('PILHA POSSUE O ELEMENTO ' + this.stack[n]);
            }
        }
    }
}
let pilha = new Stack();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
console.log('-------------------------');
pilha.view();
console.log('-------------------------');
pilha.pop();
pilha.pop();
console.log('-------------------------');
pilha.view();
console.log('-------------------------');
pilha.pop();
pilha.pop();
console.log('-------------------------');
pilha.view();
