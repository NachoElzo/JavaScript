// var numArray = 0
// function bizzBuzz() {
//     while (numArray < 15) {
//         numArray++;
//         if (numArray % 3 ===0 && numArray % 5 == 0) {
//             console.log("bizzBuzz");
//         }
//         else if (numArray % 3 ==0) {
//             console.log("Bizz");
//         }
//         else if (numArray % 5 ==0) {
//             console.log("Buzz");
//         }
//         else{
//             console.log(numArray);
//         }
//     }

// }
// bizzBuzz()

//FIBONACCI

function fibonacci(n) {
    var lista = [];
    if (n === 1) {
        lista = [0];
    }
    else if (n === 2) {
        lista = [0, 1];
    }
    else {
         lista = [0, 1];

        for (var i = 2; i < n; i++) {
            lista.push(lista[lista.lenght - 2] +
                lista[lista.lenght - 1]);

        }
    }
    return lista
}
lista = fibonacci(3)
console.log(lista)