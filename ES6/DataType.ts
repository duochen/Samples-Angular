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
    log(message: string, level?: number) {
        if (level === undefined) {
            level = 1;
        }
        console.log(`(${level}): (${message})`);
    }

    logWithDefault(message: string, level: number = 1) {
        console.log(`(${level}): (${message})`);
    }

    showErrors(...errors: string[]) {
        for (let err of errors) {
            console.error(err);
        }
    }
}

const l = new Logger();
l.log("message");
l.log('Applcation error', 3);
l.log('Default Parameter');
l.showErrors('Something', 'went', 'wrong', 'waha');
let errors = ['something','went','wrong'];
l.showErrors('Error', ...errors, '!');

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
widget.id = '3';


// getter and setter
class User {
    _firstName: string;

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value) { 
            this._firstName = value.trim();
        }
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    constructor(firstName: string, public lastName: string) {
        this.firstName = firstName;
    }
}

let user = new User('Joan', 'Doe');
console.log(`User full name is: ${user.fullName}`);
user.firstName = 'Mike';
console.log(`User full name is: ${user.fullName}`);

// methods
class Sprite {
    x: number;
    y: number;

    render() {
        console.log(`rendering widget
        ${this.x}:${this.y}`);
    }

    moveTo(x:number, y:number) {
        this.x = x;
        this.y = y;
        this.render();
    }
}

let sprite = new Sprite();
sprite.moveTo(5, 10);

// return values
class NumberWidget {
    getId(): string {
        return 'number1';
    }

    getValue(): number {
        return 10;
    }
}

// inheritance
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log('Unknown sound');
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound() {
        console.log('Woof-woof');
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound() {
        console.log('Meow');
    }
}

let dog = new Dog('Spot');
let cat = new Cat('Tom');

dog.makeSound();
cat.makeSound();

// interface
interface TextComponent {
    text: string;
    render(): void;
}

class PlainTextComponent implements TextComponent {
    text: string;
    render() {
        console.log('rendering plain component');
    }
}

class RichTextComponent implements TextComponent {
    text: string;
    render() {
        console.log('rendering text component');
    }
}

// abstract classes
abstract class PageComponent {
    abstract renderContent(): void;

    renderHeader() {

    }

    renderFooter() {

    }
}

class HomePageComponent extends PageComponent {
    constructor() {
        super();
        this.renderContent();
    }
    
    renderContent() {
        this.renderHeader();
        console.log('rendering home page');
        this.renderFooter();
    }
}

let homePage = new HomePageComponent();
homePage.renderContent();