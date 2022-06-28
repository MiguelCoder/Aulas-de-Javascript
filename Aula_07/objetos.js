let obj = {}
let pessoa = {
    nome: 'André',
    idade: 18,
    endereco: 'Estrada da Lama preta 12500'
}
obj.name = 'Juliana'
console.log(obj)
obj.age = 20
console.log(obj)
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(pessoa)
let mom = "NomeDaMae"
pessoa[mom] = 'Arya'
console.log(pessoa)