//listas
const list=[]
list.push(1002)
//concatenar lista
const lista2 =list.concat(1000)
const persona={
name:"Olger",
instagrams:'olgervi',
age:21,
isDev:true,
gustos: ['yul','lol']
}
const ane = 'age'
const field = 'instagrams'
//declarar funcionm
function restar(ope,eop2){
    return ope-eop2
}
    console.log(restar(persona[ane],2))
//las funciones son una variables mas,de primera clase

const sumar =(ope,eop2) => {

console.log(ope)
console.log(eop2)
return ope+eop2
}
console.log(sumar(2,2))
//tambien se pueden usar variables
//dinamico
console.log(persona[field])

console.log("La edad es: "+persona.age+" Los gustos "+persona.gustos[0])
console.log(lista2)
console.log(lista2[0])

