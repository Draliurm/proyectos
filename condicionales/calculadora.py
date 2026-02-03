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
        case "/":
            if n2 == 0:
                print("Error")
            else:

                print("division")
                print(n1/n2)
except ValueError:
    print("Ingrese un numero valido")
