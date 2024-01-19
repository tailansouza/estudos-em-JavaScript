const turista = prompt("Olá,qual seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Voce visitou alguma cidade ? (sim/nao)")

while (continuar === "sim"){
    let cidade= prompt("Qual o nome dela?")
    cidades += " - "+cidade+"\n"
    contagem++
    continuar = prompt("Você visitou outra cidade? (sim/nao)")
}
alert(turista + " você visitou um total de "+ contagem + " cidades,sendo elas : \n"+cidades)