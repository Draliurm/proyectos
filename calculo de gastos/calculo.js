let gastos=[]

function agregar(){

    let productos=(document.getElementById("productos").value)
    let precio=(document.getElementById("precio").value)
    let cantidad=(document.getElementById("cantidad").value)
    let registro={
    productos:productos,
    precio:parseFloat(precio),
    cantidad:parseInt(cantidad),
    total:parseFloat(precio*cantidad)};
    gastos.push(registro)
    console.log(gastos)
    mostrar()
}

function mostrar(){
    let registro=""
    for (let i=0;i<gastos.length;i++){
        registro+=(i+1)+".  Producto:   "+gastos[i].productos+" - Precio:   "+gastos[i].precio+"$ - Cantidad:   "+gastos[i].cantidad+"- Total:  "+gastos[i].total+"<br> "
        document.getElementById("ver").innerHTML=registro
}}

function calculo(){
    let dinero=(document.getElementById("dinero").value)
    let gasto=(document.getElementById("gasto").value)
    let suma= 0
    let totalProductos= 0
    for (let i=0;i<gastos.length;i++){
        totalProductos=gastos[i].precio*gastos[i].cantidad
        suma=suma+totalProductos
    }
    console.log(suma.toFixed(2))
    document.getElementById("gasto").innerHTML=suma.toFixed(2)
    document.getElementById("resto").innerHTML=(dinero-suma).toFixed(2)
    console.log(gasto)
    if(document.getElementById("resto").innerHTML<0){
        alert("Dinero insuficiente")
    }

}
