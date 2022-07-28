console.log('');
// 

class User {
    #password
    constructor(i, u, s, p) {
        this.id = i
        this.username = u
        this.salary = s
        this.#password = p
    }
    setName(newname) {
        this.username = newname
    }
    setPassword() {
        return this.#password.split('')
    }
}
let usertwo = new User(101, 'User', 5000, 'ABS')

console.log(usertwo.username);
console.log(usertwo.setPassword());
console.log('');

class Admin extends User {
    constructor(i, u, s, p, j) {
        super(i, u, s, p)
        this.job = j
    }
}
Admin.prototype.info = 'He is Admin'

let userOne = new Admin(101, 'Admin', 5000, 'ToT', 'web dev')

console.log(userOne.username);
console.log(userOne.info);
console.log(userOne.setPassword());


// 
console.log('');
