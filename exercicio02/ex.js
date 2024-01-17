
let carro1 = prompt("qual nome de seu primeiro carro")
let velo1 = prompt("qual e a velocidade macima dele?")
let carro2 = prompt("escolha o nome de seu segundo carro")
let velo2 = prompt("qual sua velocidade maxima?")
let c1 = parseFloat(velo1)
let c2 = parseFloat(velo2)

if(c1 > c2)
{alert("seu carro "+carro1+"e o mais rapido")}else 
if (c1<c2){
alert("seu carro "+carro2+" e mais veloz...")}else
if(c1===c2){
    alert("abos sao rapidos emtao e empate..")
}