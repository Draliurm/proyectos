var fecha = new Date(1991, 10, 23);
//var fecha = new Date("05/25/2023");

var dia = fecha.getDate();
var mes = fecha.getMonth();
var año = fecha.getFullYear();

alert("Dia: " + dia + "   mes: " + (mes+1) + "   año: " + año);
