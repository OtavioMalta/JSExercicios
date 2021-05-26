let num = [5,6,7,1,2,4]
num.push(0)
console.log(`O vetor tem ${num}`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log('o valor nn foi encontrado')

}else{
    console.log(`o valor 5 está na posição ${pos}`)}