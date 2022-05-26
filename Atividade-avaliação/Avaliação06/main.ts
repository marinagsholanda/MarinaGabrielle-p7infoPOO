import {Ponto} from "./ponto"
import {Quadrilatero} from "./quadrilátero"

let pontoA = new Ponto(0, 6)
let pontoB = new Ponto(9, 0)
let pontoC = new Ponto(5, 2)
let pontoD = new Ponto(9, 3)
let pontoE = new Ponto(13, 5)

let quadr = new Quadrilatero(pontoA,pontoB)

console.log(quadr.pertenceArea(pontoC)? "O ponto C pertence a área do quadrilátero!": "O ponto C não pertence a área do quadrilátero!")
console.log(quadr.pertenceArea(pontoD)? "O ponto D pertence a área do quadrilátero!": "O ponto D não pertence a área do quadrilátero!")
console.log(quadr.pertenceArea(pontoE)? "O ponto E pertence a área do quadrilátero!": "O ponto E não pertence a área do quadrilátero!")
