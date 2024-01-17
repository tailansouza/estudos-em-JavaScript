let medida = parseFloat(prompt("Qual a medida em metros"))
let opiçao = prompt("Escolha qual a opição de comversao mais lhe agrada: \n(mm)-Milimetro\n(cm)-Centimetro\n(dm)-Decimetro\n(dam)-Decametro\n(hm)-Hectometro\n(km)-quilometro")
switch(opiçao){
    case "mm":
        alert(medida*1000+" mm")
        break
    case "cm":
        alert(medida*100+" cm")
        break
    case "dm":
        alert(medida*10+" dm")
        break
    case "dam":
        alert(medida/10+" dam")
        break
    case "hm":
         alert(medida/100+" hm")
         break
    case "km":
        alert(medida/1000+" km")
        break 
    default :
        alert("escolha incoreta...")      

}