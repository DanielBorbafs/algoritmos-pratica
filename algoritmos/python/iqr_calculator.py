# código para calcular o IQR de uma faixa de dados

dados = [10, 2, 45, 32, 4, 8, 6]
dados.sort()
print(dados) # [2, 4, 6, 8, 10, 32, 45]

n = len(dados)

mediana = dados[n // 2]
print(mediana) # 8


inferior = dados[:n // 2]
print(inferior)
n_inferior = len(inferior)

mediana_inferior = inferior[n_inferior // 2] 
print(mediana_inferior) # 4 


superior = dados[n // 2 + 1:]
print(superior)  # [10, 32, 45]
n_superior = len(superior)
mediana_superior = superior[n_superior // 2]
print(mediana_superior)  # 32 (Q3)


iqr = mediana_superior - mediana_inferior
print(iqr)