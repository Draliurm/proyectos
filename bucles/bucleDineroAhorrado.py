try:
    objetivo = 1000
    meses= int(input("Ingrese la cantidad de meses: "))
    ahorro= float(input("Ingrese el monto ahorrado por mes: "))
    for i in range(meses):
        multiplicacion= ahorro*meses
    if multiplicacion>= objetivo:
        print(f"Objetivo alcanzado: Logro ahorrar {multiplicacion}")
    else:
        print(f"Objetivo Fallido: Pudo ahorrar {multiplicacion}")      
except ValueError:
    print("Ingrese un numero")