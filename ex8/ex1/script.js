function contar(){
    var ini= document.getElementById ("txti")
    var fim= document.getElementById ('txtf')
    var pas= document.getElementById ('txtp')
    let res = document.getElementById ('res')

    if (ini.value.length == 0 || fim.value.lenght == 0 || pas.value.length == 0) {
        alert('[ERRO]')
        res.innerHTML=('faltam dados')
    }else{
        res.innerHTML = 'contando: </br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if ( i < f){
            for(var c = i; c<= f; c+= p){
            res.innerHTML+=`${c} \u{1f449}`}
         } else {
            for(var c = i; c >=f; c -= p){
                res.innerHTML+= `${c} \u{1f449}`
            }
            }res.innerHTML += '\u{1F3C1}'
        }
        
       
    } 
