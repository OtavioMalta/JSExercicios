let valores = [8,1,3,5,6]
valores.sort()

/*for(var pos = 0; pos <valores.length;pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(valores[pos])
}
console.log