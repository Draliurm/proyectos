import math
n = []
x = int(input("¿Cuantos numeros tendra la lista? "))
promedio = math.floor(x/2)
for i in range(x):
    valor = float(input("Introduce el numero : "))
    n.append(valor)
print (f"El primer numero es: {n[0]}")
print (f"El ultimo numero es: {n[len(n)-1]}")
if (x%2==1):
    print (f"El numero del medio es: {n[promedio]}")
else:
    print ("No tiene numero del medio")

