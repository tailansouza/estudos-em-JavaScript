let opiçao = ""

do{
    opiçao = prompt(
    "seja bem vindo !"+
    "\nEscolha uma opiçao : "+
    "\n 1 - opiçao um"+
    "\n 2 - opiçao dois"+
    "\n 3 - opiçao tres"+
    "\n 4 - opiçao quatro"+
    "\n 5 - encerar"
     )


switch(opiçao){
    case "1":
        alert( " voce escolheu a opiçao 1")
        break
        case "2":
            alert( " voce escolheu a opiçao 2")
            break
            case "3":
                alert( " voce escolheu a opiçao 3")
                break
                case "4":
                    alert( " voce escolheu a opiçao 4")
                    break
                    case "5":
                        alert( "emserando programa...")
                        break
                        default:
                            alert("opiçao invalida")
}

}
while(opiçao !=="5");
