var count = 0
function crearContador () {
    return function counter(){
        count += 1
        return count;
    }
}
const contar = crearContador()
console.log(contar())
console.log(contar())
console.log(contar())