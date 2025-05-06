# Imprima os números de 1 a 100, substituindo múltiplos de 3 por "Fizz", 
# múltiplos de 5 por "Buzz" e de ambos por "FizzBuzz" (FizzBuzz).

i = 1

while i <= 100:
    if i % 3 == 0 and i % 5 == 0:
        print('fizzbuzz')
    elif i % 3 == 0:
        print('fizz')
    elif i % 5 == 0:
        print('buzz')
    else:
        print(i)
    i = i+1


for i in range(1, 101):  # Usando for para evitar incremento manual
    output = ""
    if i % 3 == 0:
        output += "Fizz"
    if i % 5 == 0:
        output += "Buzz"
    print(output if output else i)