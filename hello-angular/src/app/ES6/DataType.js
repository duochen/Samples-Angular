// boolean 
var isEnabled = true;
console.log(isEnabled);
function isEmpty(str) {
    return !str;
}
console.log(isEmpty(null));
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var firstName = "Joan";
var lastName = "Doe";
var fullName = firstName + " \n" + lastName;
var template = "\n    <h1>Title</h1>\n    <p>Hello, " + fullName + "</p>";
console.log(template);
// arrays
var arr1 = [];
var arr2 = new Array();
var arr3 = ['hello', 'world'];
var arr4 = ['hello', 'world'];
var flags1 = [true, false, true, false];
var flags2 = new Array(false, true);
console.log(flags1);
console.log(flags2);
var users = [];
users.push('user1');
console.log("First user: " + users[0]);
