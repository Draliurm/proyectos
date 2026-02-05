n= int(input("Ingrese el numero: "))
for i in range (1,n+1,1):
    if (i % 7==0 and i % 3==0):
        print("Asti")
    elif (i % 3==0):
        print("tres")
    elif (i % 7==0):
        print("siete")
    else:
        print(i) 