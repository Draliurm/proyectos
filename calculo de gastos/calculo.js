let gastos=[]

function agregar(){

    let productos=(document.getElementById("productos").value)
    let precio=(document.getElementById("precio").value)
    let registro={
    productos:productos,precio:parseFloat(precio)};
    gastos.push(registro)
    console.log(gastos)
    mostrar()
}

function mostrar(){
    let registro=""
    for (let i=0;i<gastos.length;i++){
        registro+=(i+1)+"  "+gastos[i].productos+"  "+gastos[i].precio+" <br> "
        document.getElementById("ver").innerHTML=registro
}}

function calculo(){
    let dinero=(document.getElementById("dinero").value)
    let gasto=(document.getElementById("gasto").value)
    let resto=(document.getElementById("resto").value)
    let suma= 0
    for (let i=0;i<gastos.length;i++){
        suma=suma+gastos[i].precio
    }
    console.log(suma.toFixed(2))
    document.getElementById("gasto").innerHTML=suma.toFixed(2)
    document.getElementById("resto").innerHTML=(dinero-suma).toFixed(2)
    console.log(gasto)

}
