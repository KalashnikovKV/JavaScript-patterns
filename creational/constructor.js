class Server {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getFunc() {
        return `something y = ${this.y}`
    }
}
const z = new Server('one', '1')

console.log(z.getFunc())