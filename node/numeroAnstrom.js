const numero="153"
const vector=numero.split("")
let total=0
for(let i=0;i<vector.length;i++){
    total=total+ vector[i]**vector.length
    console.log(vector[i]**vector.length)

}
if (+numero===total){
    console.log("Es un numero anstrom")
}
else{
    console.log("no es un numero anstrom")
}