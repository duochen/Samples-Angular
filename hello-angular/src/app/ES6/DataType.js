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
// array operations
var users = [];
users.push('user1');
console.log("First user: " + users[0]);
// enum
var Suit;
(function (Suit) {
    Suit[Suit["Club"] = 0] = "Club";
    Suit[Suit["Diamond"] = 1] = "Diamond";
    Suit[Suit["Heart"] = 2] = "Heart";
    Suit[Suit["Spade"] = 3] = "Spade";
})(Suit || (Suit = {}));
;
var s = Suit.Spade;
console.log("enum: Suit ", Suit[s]);
var Suit1;
(function (Suit1) {
    Suit1[Suit1["Club"] = 1] = "Club";
    Suit1[Suit1["Diamond"] = 2] = "Diamond";
    Suit1[Suit1["Heart"] = 4] = "Heart";
    Suit1[Suit1["Spade"] = 8] = "Spade";
})(Suit1 || (Suit1 = {}));
;
console.log("enum: Suit1 ", Suit1[4]);
// any
var obj = {
    log: function (message) {
        console.log(message);
    }
};
obj.log('hello world');
// obj.helloworld('log');
// void
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (message) {
        console.log(message);
    };
    return Logger;
}());
var l = new Logger();
l.log("message");
function fn(x) {
    x();
}
fn(function () {
    console.log("Called from function");
});
// class
var Widget = /** @class */ (function () {
    function Widget(id) {
        this.id = id;
        this.x = 0;
        this.y = 0;
    }
    Widget.prototype.render = function () {
        console.log("Rendering widget \"" + this.id + "\"");
    };
    return Widget;
}());
var widget = new Widget('text1');
widget.render();
// getter and setter
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return (this.firstName + " " + this.lastName).trim();
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User('Joan', 'Doe');
console.log("User full name is: " + user.fullName);
