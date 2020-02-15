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