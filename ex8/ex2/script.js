function calcular(){
    var num = document.getElementById("txtn")
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert("Digite um número")
    } else {
        let n = Number(num.value)
        var c = 1
        tab.innerHTML=''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}
