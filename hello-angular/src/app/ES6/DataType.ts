// boolean 
let isEnabled: boolean = true;
console.log(isEnabled);

function isEmpty(str: string): boolean {
    return !str;
}

console.log(isEmpty(null));

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744

// string
let firstName: string = "Joan";
let lastName: string = "Doe";
let fullName: string = `${firstName} 
${lastName}`;
let template:string = `
    <h1>Title</h1>
    <p>Hello, ${fullName}</p>`
console.log(template);

// arrays
let arr1: string[] = []
let arr2: Array<string> = new Array();

let arr3: string[] = ['hello', 'world'];
let arr4: Array<string> = ['hello', 'world'];
let flags1: boolean[] = [true, false, true, false];
let flags2: Array<boolean> = new Array(false, true);
console.log(flags1);
console.log(flags2);

// array operations
let users: string[] = [];
users.push('user1');
console.log(`First user: ${users[0]}`);

// enum
enum Suit {Club, Diamond, Heart, Spade};
let s: Suit = Suit.Spade;
console.log("enum: Suit ", Suit[s]);

enum Suit1 {Club=1, Diamond=2, Heart=4, Spade=8};
console.log("enum: Suit1 ", Suit1[4]);

// any
let obj: any = {
    log(message) {
        console.log(message);
    }
}

obj.log('hello world');
// obj.helloworld('log');

// void
class Logger {
    log(message: string): void {
        console.log(message);
    }
}

const l = new Logger();
l.log("message");

function fn(x: () => void) {
    x();
}

fn(() => 
    { console.log(
        "Called from function")
    });

interface ILogger {
    log(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}

// class
class Widget {
    id: string;
    x: number;
    y: number;

    constructor(id: string) {
        this.id = id;
        this.x = 0;
        this.y = 0;
    }

    render() {
        console.log(`Rendering widget "${this.id}"`);
    }
}

let widget = new Widget('text1');
widget.render();

// getter and setter
class User {
    firstName: string;
    lastName: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let user = new User('Joan', 'Doe');
console.log(`User full name is: ${user.fullName}`);