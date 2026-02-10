function Verificar(){
    var cedula=document.getElementById("cedula").value
    var arrCedula= cedula.split("")
    var arrResultados= []
    var acumulador= 0
    var modulo = 0
    var ultimoDigito = 0
    console.log(arrCedula)
    for (let i=0;i<arrCedula.length-1;i++){
        console.log(arrCedula[i])
        if (i%2==0){
        console.log("pares")
        arrResultados[i]=arrCedula[i]*2
        }else{
            console.log("inpares")
            arrResultados[i]=arrCedula[i]*1
        }
        if (arrResultados[i]>9){
            arrResultados[i] = arrResultados[i]-9
        }

            
    }
    for (let i = 0; i < arrResultados.length;i++) {
        acumulador+=arrResultados[i]
        console.log(acumulador)
        
    }
    modulo=acumulador%10
    console.log("modulo",modulo)
    ultimoDigito=10-modulo
    if (arrCedula[arrCedula.length-1]==ultimoDigito){
        alert("Cedula valida")
    }else{
        alert("Ingrese una cedula valida")
    }

    console.log("acunulador", acumulador)
    console.log(arrResultados)
    document.getElementById("mostrar").innerHTML=cedula
}