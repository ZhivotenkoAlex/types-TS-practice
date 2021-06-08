let a: number = 5; //number
let b: string = "gh" //string
let c: boolean = true //boolean
let d: null = null //null
let e:undefined = undefined //undefined
let f:any="as" //any of types

let g:number[]=[30,29,45,5] //array of numbers
let h: Array<number>=[30,29,45,5] //array of numbers (generic)

let i: (number | string)[]=[4,5,8,"gfg","dgdg"] // type composition. array of numbers and strings
let j: readonly number[]=[4,5,8] //an array of numbers that we cannot mutate
let k: [number,string]=[4,"gf"] //tuple. variable can contain only two elements, and first of them must be a number and second - a string

//custom types

type Something = number | string;
const l: Something = "fkf"

//union

// the variable with type UNION can contain value only from union types
// in this example m can contain value only 'request', 'success' or "error"

type SomethingElse = 'request' | 'success' | "error"
let m : SomethingElse= "error"

//or in next axample variable n can have values only 2 or 4 or 8

type Cell = 2 | 4 | 8;
let n: Cell = 2;

//Interface like a 'type' but for objects

// "?" - optional property, not required

interface PluginConfig{
  readonly selector: string;
    perPage: number;
    startIndex: number;
    draggable?: boolean;
}

const config: PluginConfig = {
    selector: "#plugin-1",
    perPage: 10,
    startIndex: 0,
    
}

//index signatures - defines a multiple keys and values

interface Employees{
    [key:string]:number
}

let staff: Employees = {
    ann: 2,
    stew: 5,
    steven: 1,
    john: 5,
}


// example
// find a most productive worker

const employees: Employees = {
    ann: 2,
    stew: 3,
    steven: 1,
    john: 5,
}

const entries = Object.entries(employees)
let bestEmployee = "";
let bestEmployeeProIndex = 0;

for (const [name,value] of entries) {
    if (bestEmployeeProIndex <= value) {
        bestEmployee = name;
    }
}

// extending interfaces (наследование интерфейсов)

interface Shape{
    color:string,
}
interface Square extends Shape{
    sideLength:number,
}

let square = {} as Square
square.color = "blue";
square.sideLength = 15;

// or a second syntax

let triangle:Square={color:"grey", sideLength:15}

// enum - перечисление.


enum PizzaSize{
    Small,
    Medium,
    Large
}

// PizzaSize.Small //0
// PizzaSize.Medium //1
// PizzaSize.Large //2

console.log(triangle);

// FUNCTIONS 

// parameters and return
// after the brackets with params we declared what type of data we will return
const addExp = function (x: number, y: string):string {
    return x+y
}
addExp(1, "data")

let func = function (x?: number) { } //x? - not required parametr

const fn = (a: number, b: number, ...restParams: number[]) => { } // typification of rest params.

//typification of function through custom type

type Fn = (id: number, value: number) => number //it`s not an arrow function, its just a syntax)))

const count: Fn = function (id, value) { return id + value }

//or through interface

interface IFn{
    (a: number, b: number): number;
}
const fnInterface:IFn=(a,b)=>{return a+b}
//function without return

// void - тип возвращаемого значения функции, когда функция без возврата. Но если у функции будет возврат - он не выкинет ошибку. он этот факт проигнорирует

type Rand=(mes:string)=>void

let randomFunction:Rand=(message)=>{}
randomFunction('hi')

// example

enum PizzaSize1{
    SmallPizza = 's',
    MediumPizza = 'm',
    LargePizza="l"
}

type Size=PizzaSize1.SmallPizza|PizzaSize1.MediumPizza|PizzaSize1.LargePizza

interface IPizza{
    size: Size,
    toppings: string[],
    // logSize?:()=>void,    it`s an old syntax, and a example of not required method for him
    logSize(): void, // its a new syntax
    getSize?(): string, //not required method
    addTopping(topping:string):void
}



const pizza:IPizza = {
    size: PizzaSize1.SmallPizza,
    toppings: ['sause', 'mushrooms'],
    logSize() { console.log(this.size) },
    getSize() { return this.size },
    addTopping(topping){this.toppings.push(topping)}
}

// CLASSES

interface Params{
    size: string;
    toppings: string[];
}

interface IPizzas{
    size: string;
    // toppingsPizza: string[]; Interface can`t describe private methods and properties, because interface of class describes a future object 
    addTopping(topping: string): void;
    // valiateTopping(topping: string): boolean;
}

class Pizzas implements IPizzas {
    public size: string;
    private toppings: string[] // we declare the properties of constructor
    
    constructor({ size, toppings = []} :Params) {
        this.size = size;
        this.toppings = toppings;
    }

        // constructor( public size: string, private toppings: string[]) {
    //     this.size = size;
    //     this.toppings = toppings;
    // } this syntax almost not used, because in params we very often get an object of settings.

    private validateTopping(topping: string):boolean {
                //validation
        return true
}

    public addTopping(topping: string) {
        this.toppings.push(topping)
}
   
}

const PizzaHot: IPizzas = new Pizzas({ size: 'medium', toppings: ['cheese'] })

let as = a + b + c + d + e + f + g + h + i + j + k + l + m + n + config + staff + func + fn + count + bestEmployee + fnInterface + PizzaSize + pizza + PizzaHot;
b = as


export { }