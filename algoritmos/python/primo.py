
# Verifique se um número é primo.
def is_primo(num):
    if num <= 1:
        return False
    for i in range(2, num):
        print(i)
        if num % i == 0:
            return False
    return True

print(is_primo(3))    