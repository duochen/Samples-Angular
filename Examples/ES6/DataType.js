var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
    Logger.prototype.log = function (message, level) {
        if (level === undefined) {
            level = 1;
        }
        console.log("(" + level + "): (" + message + ")");
    };
    Logger.prototype.logWithDefault = function (message, level) {
        if (level === void 0) { level = 1; }
        console.log("(" + level + "): (" + message + ")");
    };
    Logger.prototype.showErrors = function () {
        var errors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            errors[_i] = arguments[_i];
        }
        for (var _a = 0, errors_1 = errors; _a < errors_1.length; _a++) {
            var err = errors_1[_a];
            console.error(err);
        }
    };
    return Logger;
}());
var l = new Logger();
l.log("message");
l.log('Applcation error', 3);
l.log('Default Parameter');
l.showErrors('Something', 'went', 'wrong', 'waha');
var errors = ['something', 'went', 'wrong'];
l.showErrors.apply(l, __spreadArrays(['Error'], errors, ['!']));
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
widget.id = '3';
// getter and setter
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value) {
                this._firstName = value.trim();
            }
        },
        enumerable: true,
        configurable: true
    });
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
user.firstName = 'Mike';
console.log("User full name is: " + user.fullName);
// methods
var Sprite = /** @class */ (function () {
    function Sprite() {
    }
    Sprite.prototype.render = function () {
        console.log("rendering widget\n        " + this.x + ":" + this.y);
    };
    Sprite.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        this.render();
    };
    return Sprite;
}());
var sprite = new Sprite();
sprite.moveTo(5, 10);
// return values
var NumberWidget = /** @class */ (function () {
    function NumberWidget() {
    }
    NumberWidget.prototype.getId = function () {
        return 'number1';
    };
    NumberWidget.prototype.getValue = function () {
        return 10;
    };
    return NumberWidget;
}());
// inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log('Unknown sound');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Woof-woof');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('Meow');
    };
    return Cat;
}(Animal));
var dog = new Dog('Spot');
var cat = new Cat('Tom');
dog.makeSound();
cat.makeSound();
var PlainTextComponent = /** @class */ (function () {
    function PlainTextComponent() {
    }
    PlainTextComponent.prototype.render = function () {
        console.log('rendering plain component');
    };
    return PlainTextComponent;
}());
var RichTextComponent = /** @class */ (function () {
    function RichTextComponent() {
    }
    RichTextComponent.prototype.render = function () {
        console.log('rendering text component');
    };
    return RichTextComponent;
}());
// abstract classes
var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.renderHeader = function () {
    };
    PageComponent.prototype.renderFooter = function () {
    };
    return PageComponent;
}());
var HomePageComponent = /** @class */ (function (_super) {
    __extends(HomePageComponent, _super);
    function HomePageComponent() {
        var _this = _super.call(this) || this;
        _this.renderContent();
        return _this;
    }
    HomePageComponent.prototype.renderContent = function () {
        this.renderHeader();
        console.log('rendering home page');
        this.renderFooter();
    };
    return HomePageComponent;
}(PageComponent));
var homePage = new HomePageComponent();
homePage.renderContent();
