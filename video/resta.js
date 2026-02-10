var n1 = prompt ("Ingrese el primer valor: ");
var n2 = prompt ("Ingrese el segundo valor: ");

var resta = n1-n2;
if (resta>0){
    console.log("Es mayor a 0")
    let imparpar = resta % 2;

    if (imparpar ==0){
        console.log("Es par")
    }else{
        console.log("Es impar")
    }
}else{
    console.log("Es menor o igual a 0")
}