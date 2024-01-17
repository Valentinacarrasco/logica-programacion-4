//Suma de los dos numeros anteriores para obtener el siguiente

function Fibonacci(){
    let num = document.getElementById('numero').value;
    let list = [0,1];
    let listaResultado = []
    for (let i = 0; i < num; i++){
        listaResultado.push(list[0])
        sumatoria = list[0] + list[1]
        list[0] = list[1]
        list[1] = sumatoria
    }
    document.getElementById('resultado').innerHTML = `Los primeros ${num} números de la secuencia Fibonacci son: ${listaResultado.join('-')}`

}



//0.1.1.2.3.5.8.13.21.34