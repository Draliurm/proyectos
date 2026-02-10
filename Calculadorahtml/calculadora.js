function suma(){
    document.getElementById("numero").innerHTML=parseInt(document.getElementById("calculo").value)+parseInt(document.getElementById("calculo2").value)

}
function resta(){
    document.getElementById("numero").innerHTML=parseInt(document.getElementById("calculo").value)-parseInt(document.getElementById("calculo2").value)

}
function mult(){
    document.getElementById("numero").innerHTML=parseInt(document.getElementById("calculo").value)*parseInt(document.getElementById("calculo2").value)

}
function div(){
    if (document.getElementById("calculo2").value>0){
    document.getElementById("numero").innerHTML=parseInt(document.getElementById("calculo").value)/parseInt(document.getElementById("calculo2").value)
    let decimal= parseFloat(document.getElementById("numero").innerHTML).toFixed(2)
    console.log("decimal",decimal )
    document.getElementById("numero").innerHTML=decimal
    } else{
        document.getElementById("numero").innerHTML="No es divisible para 0"
    }
}
function reset(){
    document.getElementById("numero").innerHTML=0;
    document.getElementById("calculo").value="";
    document.getElementById("calculo2").value="";
}