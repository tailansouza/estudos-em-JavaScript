/*const shoppingList = []

shoppingList[0]="\nbacalhal"
shoppingList[1]="\npimenta"
shoppingList[2]="\nacerola"

alert(shoppingList)*/

//trabalhando com arrays

const arr =["Frodo", "Sam" , "Marry" , "Pippin" ,"Gandalf" , "Aragorn" , "Legolas" , "Gimli"]

//adicionar elementos : push
arr.push("Utimo")
//unshift
arr.unshift("primeiro")
//pesquisa de elemento: includes
const inclui = arr.includes("Gandalf")

//cortar e contatenar
//slice
const hobbits = arr.slice(0, 4)

//subistituiçao dos elementos
//splice

const elementoRemovido = arr.splice( arr, 1,"Gandalf,o cinzento")

alert(arr + "\n" +inclui +"\n" + hobbits
+"\n"+elementoRemovido)