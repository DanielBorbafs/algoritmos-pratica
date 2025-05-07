
# Calcule o fatorial de um número (ex: 5! = 120).
def fatorial(n):
    resultado = 1
    i = 1
    while i <= n:  
        resultado *= i
        i += 1
    print(resultado)

fatorial(5) 
