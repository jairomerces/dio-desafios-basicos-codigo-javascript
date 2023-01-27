let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75] 

let valor = 10

function buscaElementos(valor){
    for(cont = 0; cont < elementos.length; cont++){
        if(elementos[cont] === valor && valor === valor){
            return 'Achei ' + elementos[cont] + ' na posicao ' + cont
        }
    }
    if(elementos[cont] !== valor){
       return 'Numero '+ valor +' nao encontrado!'            
    }
}console.log(buscaElementos(valor))