semaforo = input("Ingrese el color")
match semaforo:
    case "Verde":
        print("Puede pasar")
    case "Amarillo":
        print("Pase con precaucion")
    case "Rojo":
        print("No esta permitido el paso")
    case _:
        print("Ingrese un color valido")