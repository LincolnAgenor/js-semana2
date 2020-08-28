alert("mostratremos alguns alunos e suas notas e o resultado")

var alunos=[]
alunos[0]='lincoln'
alunos[1]='matheus'
alunos[2]='zuco'
alunos[3]='patrike'
alunos[4]='luis'

var nota=[]
nota[0]=Number(prompt("digite a nota do primeiro aluno"))
nota[1]=Number(prompt("digite a nota do primeiro aluno"))
nota[2]=Number(prompt("digite a nota do primeiro aluno"))
nota[3]=Number(prompt("digite a nota do primeiro aluno"))
nota[4]=Number(prompt("digite a nota do primeiro aluno"))

var SomaDasNotas =nota[0]+nota[1]+nota[2]+nota[3]+nota[4]

var media=SomaDasNotas/5

alert("não se esqueça a media para passar era: " + media)

var lincoln =alunos[0]+nota[0]
var matheus =alunos[1]+nota[1]
var zuco =alunos[2]+nota[2]
var patrike =alunos[3]+nota[3]
var luis =alunos[4]+nota[4] 

if(nota[0]>=media){
    document.write ( alunos[0]+" sua nota foi: "+ nota[0] + " a media era " + media + " então você passou" )
    document.write ("<br>")
}else{
    document.write(alunos[0]+ " sua nota foi: " + nota[0] + " a media era " +media+ " então você reprovou")
    document.write ("<br>")
}

if(nota[1]>=media){
    document.write ( alunos[1]+" sua nota foi: "+ nota[1] + " a media era " + media + " então você passou" )
    document.write ("<br>")
}else{
    document.write(alunos[1]+ " sua nota foi: " + nota[1] + " a media era " +media+ " então você reprovou")
    document.write ("<br>")
}

if(nota[2]>=media){
    document.write ( alunos[2]+" sua nota foi: "+ nota[2] + " a media era " + media + " então você passou" )
    document.write ("<br>")
}else{
    document.write(alunos[2]+ " sua nota foi: " + nota[2] + " a media era " +media+ " então você reprovou")
    document.write ("<br>")
}

if(nota[3]>=media){
    document.write ( alunos[3]+" sua nota foi: "+ nota[3] + " a media era " + media + " então você passou" )
    document.write ("<br>")
}else{
    document.write(alunos[3]+ " sua nota foi: " + nota[3] + " a media era " +media+ " então você reprovou")
    document.write ("<br>")
}

if(nota[4]>=media){
    document.write ( alunos[4]+" sua nota foi: "+ nota[4] + " a media era " + media + " então você passou" )
    document.write ("<br>")
}else{
    document.write(alunos[4]+ " sua nota foi: " + nota[4] + " a media era " +media+ " então você reprovou")
    document.write ("<br>")
}