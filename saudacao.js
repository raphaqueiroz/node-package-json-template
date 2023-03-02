
const user = {
    name: process.argv[2], 
    age: Number(process.argv[3])
}

if (!user){
    console.log("Digite seu nome e sua idade")
} else {
    console.log(`Olá ${user.name} daqui a sete anos você terá ${user.age +7} anos de idade`)
}

