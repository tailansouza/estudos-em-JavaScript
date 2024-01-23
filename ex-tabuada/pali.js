const palavra = prompt("Informe uma palavra :")
let palavraInvertida = ""

for(let i = palavra.length-1;i >= 0;i--)
{
    palavraInvertida += palavra[i]
}
if(palavra===palavraInvertida){
    alert("essa palavra e um palindromo")
}else{
    alert("esta palavra :"+palavra+" \nlida de tras para frente fica\n"+palavraInvertida+"\n entao ela nao e um PALIDROMO")
}