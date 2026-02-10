const registros = [
        {id: 1, cedula: '1002003001', nombre: 'Jefferson Perez'},
        {id: 2, cedula: '1003150602', nombre: 'Joao Rojas'},
        {id: 3, cedula: '1004810139', nombre: 'Gonzalo Plata'},
        {id: 4, cedula: '1002003001', nombre: 'Juanito alimaña'}

    ]
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
        document.getElementById("mensaje").innerHTML=("Cedula valida")
    }else{
        document.getElementById("mensaje").innerHTML=("Ingrese una cedula valida")
    }
    document.getElementById("mostrar").innerHTML=cedula

}

function Encontrar(){
    var cedula = document.getElementById("cedula").value
    console.log(cedula)
    var verificar = registros.find(valor=>valor.id===parseInt(cedula))
    console.log(verificar)
    if (verificar){
        document.getElementById("find").innerHTML=verificar.cedula
    }else{
        document.getElementById("find").innerHTML=("No existe el usuario")
    }
    //var verificar2 = registros.filter(valor=>valor.cedula===cedula)

}