let fila =[]
let opition = ""

do{
    let pacientes = ""
    for (let i = 0; i<fila.length;i++){
        pacientes+= (i+1) + " - " + fila[i] + "\n"
    }
    opition = prompt(
        "pacientes : \n" + pacientes +
        "\nEscolha uma ação: \n1. Novo paciente \n2. consutar paciente \n3 . sair"
    )
    switch (opition){
        case "1":
            const novoPaciente = prompt("Qual e o nome do novo paciente?")
            fila.push(novoPaciente)
            break
        case "2":
           const pacienteConsutado = fila.shift() 
           if(pacienteConsutado){
           alert(pacienteConsutado + "foi removido.")
           }else{
            alert("nao a pacientes")
           }
          
           break
        case "3":
            alert("Encerando")
            break 
        default:
            alert("Opiçao invalida") 
            break        
    }
}while (opition !== "3")