saldo_actual = 1000
opcion = float(input("Ingrese la opcion a elegir: "))

match opcion:
    case 1:
        print(saldo_actual)
    case 2: 
        saldo_retirado = float(input("Ingresar el monto a retirar"))
        if saldo_actual>saldo_retirado:
            print("Su saldo fue retirado exitosamente")
        else:
            print("Saldo insuficiente")
    case 3:
        print("Exit")
    case _:
        print("Ingrese una opcion valida")
            