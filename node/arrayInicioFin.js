let arr=[2,4,6,8,0,7]
let valor=arr[0]
console.log("Para obtener el tamaño de un array se usa: .length", arr.length)
console.log("Primer valor: ", arr[0])
if (arr.length%2==1){
console.log("Valor del medio: ", arr[Math.trunc(arr.length /2)])
}
else{
console.log("No hay valor del medio")
}
console.log("Ultimo valor:", arr[arr.length-1])



