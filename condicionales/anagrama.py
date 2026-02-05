palabra= input("Ingrese la palabra:")
reves = palabra[::-1]
if palabra == reves:
        print("El anagrama es correcto")
else:
    print("No tiene un anagrama")