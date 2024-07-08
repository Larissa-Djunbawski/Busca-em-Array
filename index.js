const prompt = require('prompt-sync')();

const numeros = [1,2,3,4,5,6,7,8,8,9,7,56,12,87,42,82,59,23,89,8,64,7]

const entrada = +(prompt('Digite um número para realizar a busca: '));


function busca(array, valor){
    let contador = 0


    for (let i = 0; i < array.length; i++){
           if (array[i] === valor){
            contador++
           }
            
        }
        return contador;
    }
  


 const Encontrado = busca(numeros,entrada)

if(Encontrado > 0){
    console.log("O numero digitado esta na lista!, Ele aparece: " + Encontrado + " vezes!")
    
} else {
    console.log("O numero digitado não esta na lista")
}




