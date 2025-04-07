let numIdade = prompt("Insira a sua idade");// Variável numIdade armazena a idade do usuário;

if(isNaN(numIdade)){
    alert("Valor inválido!");
} // Indica a invalidez de uma entrada.

    if(numIdade < 18){
        alert("Menor de idade!")

    } // Condição que avalia se o usuário é menor de idade.
    else{

        alert("Maior de idade!")
    } // Condição que avalia se o usuário é maior de idade.
