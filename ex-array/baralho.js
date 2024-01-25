const baralho = []
let opition =""

do{
    opition=prompt(
        "cartas no baralho : "+ baralho.length + 
        "\n1.Adicionar uma carta \n2.puxar uma carta \n3.sair"
    )
    switch(opition){
        case "1":
            const novaCarta = prompt("Qual e a carta?")
            baralho.push(novaCarta)
            break 
        case "2":
            const cartaRetirada = baralho.pop()
            if(!cartaRetirada){
              alert("nao a cartas no baralho!")  
            }else{
                alert("a carta retirada foi " + cartaRetirada)
            }
            
            break
        case "3":
            alert("Encerando...")
            break
        default:
            alert("O piçao invalida")
            break            
    }
}while(opition !== "3")