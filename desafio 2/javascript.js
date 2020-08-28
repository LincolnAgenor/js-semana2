document.write("A seguir insira o que desejar nos cinco elementos da primeira array")
document.write("<br>")

var numero =[]
numero[0]=prompt("digite o que desejar")
numero[1]=prompt("digite o que desejar")
numero[2]=prompt("digite o que desejar")
numero[3]=prompt("digite o que desejar")
numero[4]=prompt("digite o que desejar")

document.write(numero)
document.write("<br>")

document.write("Agora insira o que desejar nos cinco elementos da segunda array")
document.write("<br>")

var pessoas=[]
pessoas[0]=prompt("digite o que desejar")
pessoas[1]=prompt("digite o que desejar")
pessoas[2]=prompt("digite o que desejar")
pessoas[3]=prompt("digite o que desejar")
pessoas[4]=prompt("digite o que desejar")

document.write(pessoas)
document.write("<br>")

document.write("agora juntaremos os 10 elemento que você digitou")
document.write("<br>")


var pessoasnumeradas =numero.concat(pessoas)

document.write(pessoasnumeradas)
