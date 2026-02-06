n1= float(input("Ingrese la primera calificacion: "))
if n1>=0 and n1<=10:
    print("Calificacion correcta")
else:
    print("Ingrese una calificacion valida")
    
n2= float(input("Ingrese la segunda calificacion: "))
if n2>=0 and n2<=10:
    print("Calificacion correcta")
else:
    print("Ingrese una calificación valida")

suma= n1+n2
promedio = suma/2
if suma>=14:
    print(suma)
    print(promedio)
    print("Aprobado")
elif suma>=11 and suma<=13:
    print(suma)
    print(promedio)
    print("Supletorio")
    n3= float(input("Ingrese la nota de supletorio: "))
    suma2 = promedio+n3
    promedio2=suma2/2
    if promedio2>=7:
        print(suma2)
        print(promedio2)
        print("Aprobado")
    else:
        print("Reprobado")
else:
        print(suma)
        print(promedio)
        print("Reprobado")
       