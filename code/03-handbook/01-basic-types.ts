let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let lastName: string = 'name';
lastName = 'smith';

let age: number = 37;
let sentence: string = `Hello, my name is ${ lastName }
I'll be ${ age + 1 } years old next month.`;

let list: number[] = [1, 2, 3];
let listOther: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number, boolean];
x = ['hello', 10, false];

// Enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = false;
let listNotSure: Array<any> = [1, '1', false];

// Void
let unusableUndefined: void = undefined;
let unusableNull: void = null;

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}

// Assert
let someValue: string = "this is a string";
let strLength: number = (<string> someValue).length;
let strAsLength: number = (someValue as string).length;
