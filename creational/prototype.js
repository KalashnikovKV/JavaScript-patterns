const car = {
    wheels: 4,
    init() {
        console.log(`Колес : ${this.wheels}, а владелец : ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Kirill'
    }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()