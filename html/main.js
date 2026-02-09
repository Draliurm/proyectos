
function sumar(){
    if (document.getElementById("numero").innerHTML<100000){
    document.getElementById("numero").innerHTML=++document.getElementById("numero").innerHTML;
    }
}
function restar(){
    if (document.getElementById("numero").innerHTML>0){
    document.getElementById("numero").innerHTML=--document.getElementById("numero").innerHTML;
    }
}
function reset(){
    document.getElementById("numero").innerHTML=0;
}
function multiplicar(){
    multi=document.getElementById("numero").innerHTML*document.getElementById("numero3").value
    console.log(multi)
    document.getElementById("numero").innerHTML=multi;
}
