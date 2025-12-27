// classes   => tem o bjetivo de padronizar os objetos facilitando que
             // sejam replicados sem a necessidade de fazer um a um
             // e consequentemente evitando erros de digitação.

// Exemplo de como seria feito SEM o class

// const person = {
//     name: 'Edmar',
//     age: 41,
//     talk: function () {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// const person2 = {
//     name: 'Jão',
//     age: 48,
//     talk: function () {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// Exemplo utilizando o CLASS

// class Person {     // => boa trática sempre inicia a class com maiúscula
//     name;
//     age;

//     talk(){
//         console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old.`)

//     }
// }

// const newPerson  = new Person()
// const newPerson1 = new Person()
// const newPerson2 = new Person()
// // const newPerson3 = new Person()  poderia criar quantas fossem necessárias

// newPerson.name = 'Edmar'
// newPerson.age = 41
// newPerson.talk()

// newPerson.name = 'Jimmy'
// newPerson.age = 35
// newPerson.talk()

// newPerson.name = 'Ozzy'
// newPerson.age = 69
// newPerson.talk()

// Exemplo utilizando o CLASS com o método CONSTRUCTOR

class Person {
    constructor(name, age){
        console.log(`Hello, my name is ${name}`)

        this.name = name
        this.age = age
    }   
    
        talk(){
            console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old.`)

    }
}
 const newPerson  = new Person('Edmar', 41)
 const newPerson1 = new Person('Jimmy', 35)
 const newPerson2 = new Person('Ozzy', 69)

newPerson .talk()
newPerson1.talk()
newPerson2.talk()
