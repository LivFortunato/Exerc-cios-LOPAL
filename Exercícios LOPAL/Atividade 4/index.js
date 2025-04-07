let valorCompra = parseFloat(prompt("Insira o valor da sua compra"));

let valorTotal = valorCompra*0.9// Variável valorTotal armazena o valor da compra multiplicado por 0.9.
; if (valorCompra >= 100){
    alert(`Sua compra ganhou um desconto de 10%!! ${valorTotal}`)
} // Condição que determina se sua compra terá desconto.
else{
    alert(`Valor da compra menor que 100 reais. Valor da compra ${valorCompra}`)

} // Condição que avalia se o valor da sua compra passa de 100 reais.

