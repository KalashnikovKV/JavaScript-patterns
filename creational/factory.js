class SimpleCost {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardCost {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumCost {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class Factory {
    static list = {
        simple: SimpleCost,
        standard: StandardCost,
        premium: PremiumCost
    }

    create(name, type = 'simple') {
        const Cost = Factory.list[type] || Factory.list.simple;
        const anyConst = new Cost(name);
        anyConst.type = type;
        anyConst.define = function () {
            console.log(`${this.name} (${this.type}) : ${this.cost}`)
        }
        return anyConst;
    }
}

const factory = new Factory();

const costs = [
    factory.create('x', 'standard'),
    factory.create('y', 'simple'),
    factory.create('z', 'premium'),
]
// console.log(costs)

costs.forEach(el => {
    el.define()
})