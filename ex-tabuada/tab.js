const numero = parseFloat(prompt("De qual numero você quer caucular a tabuada:"))
let resutado = ""

for (fator = 1 ; fator<=20 ; fator++){
    resutado+= "->" +numero+ " X " +fator+ " = "+(numero*fator) + "\n"
}
alert("o resutado foi"+resutado)