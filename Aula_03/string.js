let nome = 'Juca'
let sobrenome = 'Serqueira'
let concatenado = (nome + "\n" + sobrenome)
let nomecompleto = nome + sobrenome
let aspas = "\""

console.log(nome.concat(sobrenome))
console.log(nome + " " + sobrenome)
console.log(concatenado)
console.log(`${nome} ${sobrenome}`)
console.log(aspas)
console.log(nomecompleto.split(""))
console.log(concatenado.includes("Juca"))
console.log(concatenado.startsWith("J"))
console.log(nomecompleto.replace("J", "j"))