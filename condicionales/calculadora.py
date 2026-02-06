valor = ""
while valor !='salir':
    try:
        n1 = float(input("Ingrese el primer numero: "))
        n2 = float(input("Ingrese el segundo numero: "))
        operacion = input("Ingrese el operador: ")

        match operacion:
            case "+":
                print("suma")
                print(n1+n2)
            case "-":
                print("resta")
                print(n1-n2)
            case "*":
                print("multiplicacion")
                print(n1*n2)
            case "**":
                print("potencia")
                print(n1**n2)
            case "//":
                print("division2")
                print(n1//n2)
            case "%":
                print("modulo")
                print(n1%n2)
            case "/":
                if n2 == 0:
                    print("Error")
                else:
                    print("division")
                    print(n1/n2)
            case _:
                print("Salir")

        valor= input("Ingrese la accion a realizar: ")

    except ValueError:
        print("Ingrese un numero valido")
