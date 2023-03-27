/* // Data types in JavaScript
- number
- string
- boolean
- null // typeof null;  "object"
- undefined
- object
- Symbol    // ES6

// Variable type changing
var num = 42;		// number
num = 'hello';		// string
num = false;		// boolean */

// Boolean Type
let completed: boolean = false;

completed = 42;     // Type '42' is not assignable to type 'boolean'
completed = '42';   // Type ’"42"' is not assignable to type 'boolean'

completed = true;

// Number Type
const decimal: number = 6;
const integer: number = 7.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String Type for simple string
const userName: string = 'John';
// String Type for template string
const sentence: string = `Hello, my name is ${ userName }!`;

// Null & Undefined Types
const u: undefined = undefined;
const n: null = null;

// Void Type
// For function result:
const greetUser = (): void => {
    alert("Hello world!");
};

// Array Type
let myList1: number[] = [1, 2, 3];
let myList2: Array<number> = [1, 2, 3];

// Generic type
type MyArray<T> = Array<T>;
const myStringArray: MyArray<string> = ["hello", "world"];

//Any Type
let a: any = false;
// Issue case (no error)
a = 42;		// number
a = "hello";	// string


//Custom Type
type Task ={
    id: string, 
    title: string, 
    completed: boolean,
    createdAt: Date
  }


//Functions
function sum1(a: number, b: number):number {
    return a + b;
  }

  //optional parameter
function sum2(a: number, b: number, c?:number): number {
    if (c){
        return a + b + c;  
    }
    return a + b;
  }

// default parameter
  function sum3(a: number, b: number, c:number = 0): number {
    return a + b + c ;
  }

// arrow function
const sum = (x: number, y: number): number => x + y;