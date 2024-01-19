let saldo = parseFloat(prompt("Ola,porfavor imforme seu saudo :"))
let opiçao= ""

do{
    opiçao = prompt("Seu saudo e de "+ saldo +
    "\nEscolha uma das opiçoes:  "+
    "\n 1 - adicionar dinheiro "+
    "\n 2 - retirar dinheiro "+
    "\n 3 - sair"
    )
switch(opiçao){
    case "1":
        saldo += parseFloat(prompt("Qual valor a ser adicionado:"))
        break
        case "2":
        saldo -= parseFloat(prompt("Qual valor a ser retirado:"))
        break
        case"3":
        alert("enserando")
        break
        default:
        alert("Opição invalida")
        break

}    
}
while(opiçao!=="3");