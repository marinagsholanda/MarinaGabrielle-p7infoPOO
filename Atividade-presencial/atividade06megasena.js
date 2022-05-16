"use strict";
function gerandoRandom() {
    var max = 6;
    var random = [];
    for (var n = 0; n < max; n++) {
        var num = Math.floor(Math.random() * 60);
        if (random.indexOf(num) == -1) {
            random.push(num);
        }
        else
            n--;
    }
    console.log(random);
}
console.log(gerandoRandom());
