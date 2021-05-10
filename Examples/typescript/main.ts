import { Point } from './Point'
import { LikeComponent  } from './like.component'
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgrounColor = Color.Red;


let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

console.log(endsWithC);
console.log(alternativeWay);

let log = function(message) {
    console.log(message);
}

let doLog = (message) => console.log(message);


log("This is a message");
doLog("That is another message");

interface MyPoint {
    x: number,
    y: number
}

let drawPoint = (point: MyPoint) =>
{
    console.log("x: " + point.x + " y:" + point.y);
}

drawPoint({x: 1, y: 2}); 


let p = new Point(1, 2);
p.draw();
let x = p.x;
p.x = 10;
p.draw();

let q = new Point();
q.draw();

let component = new LikeComponent(10, true);
component.onClick();
console.log('like Count: ' + component.likeCount + " isSelected: " + component.isSelected);