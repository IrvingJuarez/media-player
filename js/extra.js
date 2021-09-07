let person = {
    name: "Irving",
    lastName: "Juarez",
    location: "Mexico"
}

function greetings(){
    console.log(`Hi, my name is ${this.name} and I live in ${this.location}`)
}

const personGreeting = greetings.bind(person)
personGreeting()