var fecha = new Date();
var year = fecha.getFullYear();
console.log(year)
var mounth = fecha.getMonth()+1;
console.log(mounth)

function Calcular(){
    var calculoAnio = year-parseInt((document.getElementById("anio").value))
    var mes = Math.abs(mounth-parseInt((document.getElementById("mes").value)))
    if (calculoAnio>18) {
        alert("Es mayor de edad")
        alert("Puede votar")

    }else {
        alert("Es menor de edad")
        alert("No puede votar")
    }
    alert("edad en años:  " + (calculoAnio-1) + "  edad en meses:   " + mes)
}
