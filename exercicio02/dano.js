const atacante = prompt("Qual é o nome do seu personagen:")
const poderDeAtaque = parseFloat(prompt("qual seu poder de ataque"))

const defensor = prompt("qual o nome do defensor?")
let pontoDeVida = parseFloat(prompt("qual sua quatidade de vida"))
const poderDeDefeza = parseFloat(prompt("qual seu poder de defeza"))
const possuiEscudo = prompt("Ele possui um escudo? (sim/nao)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefeza && possuiEscudo === "nao"){
    danoCausado = poderDeAtaque - poderDeDefeza
}else
 if( poderDeAtaque > poderDeDefeza && possuiEscudo === "sim")
 {
    danoCausado = (poderDeAtaque - poderDeDefeza) / 2
}
pontoDeVida -= danoCausado

alert(atacante +" causou "+ danoCausado + " pontos de dano em "+ defensor)
alert(
    atacante + "\n poder de ataque: "+poderDeAtaque+ "\n\n"+
    defensor + "\n Pontos de vida: "+pontoDeVida+
    "\npoder de defesa: "+poderDeDefeza+ "\nposui escudo: "+ possuiEscudo
)