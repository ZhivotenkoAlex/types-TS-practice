// 1.1
const name:string = '«Генератор защитного поля»'; // Write code in this line
let price:number = 1000; // Write code in this line
let firstMessage:string = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code in this line
price = 2000;
const secondMessage:string = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(firstMessage);
console.log(secondMessage);

// 1.2

const invoice:number = 150;
const stock:number = 100;
let message:string = "";
invoice <= stock ? message = "Заказ оформлен, с вами свяжется менеджер" : message = "На складе недостаточно товаров!"
console.log(message);
//1.3
const userPassword:string = 'jqueryismyjam';

const ADMIN_PASSWORD:string = 'jqueryismyjam';

const CANCELED_BY_USER:string = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED:string = 'Добро пожаловать!';
const ACCESS_DENIED:string = 'Доступ запрещен, неверный пароль!';
let message1:string;

if (userPassword === ADMIN_PASSWORD) {
    message1 = ACCESS_IS_ALLOWED;
} else if (userPassword == null) {
    message1 = CANCELED_BY_USER;
} else {
    message1 = ACCESS_DENIED;
}
console.log(message1);

// 1.4
let orderPieces:number = 10;
const credits:number = 23580;
const pricePerDroid:number = 3000;
const CANCELED_BY_USER14:string = 'Отменено пользователем!';
const ACCESS_DENIED14:string = 'Недостаточно средств на счету!';

let totalPrice:number = orderPieces * pricePerDroid; // Write code in this line
let balanceСredit:number = credits - totalPrice; // Write code in this line
let message14:string;

if (orderPieces === null) {
    message14 = CANCELED_BY_USER14;
} else if (balanceСredit < 0) {
    message14 = ACCESS_DENIED14;
} else { message14 = `Вы купили ${orderPieces} дроидов, на счету осталось ${ balanceСredit } кредитов`; }

console.log(message14);

// 1.5
let countryName:string = "Австралия";

const CANCELED_BY_USER15:string = 'Отменено пользователем!';
const NO_DELIVERY:string = 'В выбранную страну доставка недоступна.';
const CNINA:string = 'Китай';
const AUSTRALIA:string = 'Австралия';
const INDIA:string = 'Индия';
const JAMAICA:string = 'Ямайка';

let message15:string="";
let price15:number = 0;
let country:string="";
if (countryName === null) {
    message15 = CANCELED_BY_USER15;
} else {
    country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code in this line
    switch (country) {
        case CNINA:
            price15 = 100;
            break;
        case AUSTRALIA:
            price15 = 170;
            break;
        case INDIA:
            price15 = 80;
            break;
        case JAMAICA:
            price15 = 120;
            break;
            
        default:
            message = NO_DELIVERY;
    }

}

if (price15 > 0) {
    // Write code in this line
    message15 = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message15);


// 2.1
const getItemsString = function (array: (number|string)[]): string {
    let result = "";
    for (let i = 0; i < array.length; i += 1) {

        result += `${i+1} - ${array[i]}\n`;

    }
    return result;

}
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// 2.2

const calculateEngravingPrice = (message: string = "", pricePerWord: number = 0): number => pricePerWord * message.split(' ').length;
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10))
// 2.3
function findLongestWord(string:string = ""):string {
  

    let items:string[] = string.split(' ');
    let longestWord:string = items[0];

    for (const item of items) {
        if (longestWord.length < item.length) {
            longestWord = item;
        }
    }
    return `${longestWord}`;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// 2.4
function formatString(string24:string, maxLength:number = 40):string {
    
    if (string24.length <= maxLength) {
        return string24;
    } else {
        return `${string24.slice(0, maxLength)}...`;
    }

}

console.log(formatString('Curabitur ligula sapien, tincidunt non.',20));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

// 2.5
function checkForSpam(str:string):boolean|undefined {
    
    str = str.toLowerCase();

    for (let i = 0; i < 2; i += 1) {
        let isIncludesSpam:boolean = str.includes("spam") || str.includes("sale");
        return isIncludesSpam;
    }

}

console.log(checkForSpam('Latest technology news')); // false

// 2.6

function mapArray(array:number[]):number[] {
    // const numbers:number[] = new Array(array.length);
    const numbers: number[] = [];
    for (let i = 0; i < array.length; i += 1) {
       // numbers.splice(i, i, array[i] * 10);
        numbers.push(array[i]*10)
    }
       
    return numbers;
}

console.log(mapArray([-2, 0, 2]));

// 2.7
function filterArray(array:number[]):number[] {
    const numbers:number[] = [];
    for (let i = 0; i < array.length; i += 1) {
        if (Number.isFinite(array[i]) === true) {
            numbers.push(array[i]);
        }
        // console.log(Number.isNaN(array[i]));

    }

    return numbers;

}

console.log(filterArray([1, NaN, Infinity]));


//2.8
function reduceArray(array:number[]):number {
    let total:number = 0;
    
    for (let i = 0; i < array.length; i += 1) {
        if (array.length === 0) {
            return 0;
        } else {
            total += array[i];
        }
    }

    return total;
};

console.log(reduceArray([1, 2, 3]));

//2.9
function isLoginValid(login:string, min:number = 4, max:number = 16):boolean {
    const validationLength:boolean = login.length >= min && login.length <= max ? true : false;
    return validationLength;
}



function isLoginUnique(allLogins:string[], login:string):boolean {
   
    let include:boolean = true;
    for (const log of allLogins) {
        if (log === login) {
            include = false;
            break;
        } 
    }
    return include;
}


function addLogin(allLogins:string[], login:string):string {
    const SUCCESS:string = 'Логин успешно добавлен!';
    const REFUSAL:string = 'Такой логин уже используется!';
    const ERROR:string = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message:string='';
    let min:number = 4;
    let max:number= 16;

    if (isLoginValid(login, min, max) === false) {
        message = ERROR;
    } else if (isLoginUnique(allLogins, login) === false) {
        message = REFUSAL;
    } else if (isLoginUnique(allLogins, login) === true) {
        allLogins.push(login);
        message = SUCCESS;
    }
    
      return message;
}

const logins:string[] = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];


console.log(addLogin(logins, 'Ajax'));


//3.1

let message31: string = '';

interface User{
    age: number,
    hobby: string,
    name: string,
    premium: boolean,
    mood?: string,
    ['full time']?: string,
    [index: string]:any
}

const user:User = {
    age: 20,
    hobby: 'html',
    name: 'Mango',
    premium: true,
};
user.mood = "happy";
user['full time'] = "true";
user.hobby = 'skydiving';
user.premium = false;

const keys:string[] = Object.keys(user);

for (const key of keys) {
    message31 += key + ' : ' + user[key] + "\n";

}

console.log(message31);

//3.2

const countProps = function(obj:{}):number {
   
        const keys:string[] = Object.keys(obj);
    return keys.length;

};

console.log(countProps({a:1, b:1}));

//3.3
const findBestEmployee = function(employees:{[index:string]:any}):string {
   
        let lider:string = '';
    let maxTasks:number = 0;
    const keys:string[] = Object.keys(employees);
    for (const key of keys) {
        if (maxTasks < employees[key]) {
            maxTasks = employees[key];
            lider = key;

        }
    }
    return lider;
};


// Объекты и ожидаемый результат
const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

// 3.4
interface Developers{
    [key:string]:number
}

const countTotalSalary = function(employees:{[index:string]:number}):number {

    let total:number = 0;
    let employ:string[] = Object.keys(employees);


    for (let key of employ) {
        total += employees[key];
    }
    return total
};

// Объекты и ожидаемый результат
const developers1:Developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
   
};
console.log(countTotalSalary(developers1));
// 1000

//3.5
const products:{}[] = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];
 
type Object={[key:string]:any}[]

function getAllPropValues(array:Object, prop:string):string[] {

    let propValues:string[] = [];

    for (const item of array) {
        if (item[prop] === undefined) {
            return propValues;
        };
        propValues.push(item[prop]);
    }
      return propValues;

}

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

//3.6

function calculateTotalPrice(array:{[key:string]:any}[], prop:string) {


    let total:number = 0;

    for (const product of array) {
        if (product.name === prop) {
            total += product.price * product.quantity;

        }

    }
    return total;
}

// Объекты и ожидаемый результат
const products1= [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
];

console.log(calculateTotalPrice(products1, 'Радар'));
// 9080

//4.1
type Fn = (element: number, index: number) => number

const addIndex:Fn = (element, index)=> element + index;
const subIndex:Fn = (element, index)=> element - index;



function mapArray1(array:number[], cb:Fn):number[] {
 
        const numbers:number[] = new Array(array.length);
    for (let i = 0; i < array.length; i += 1) {
        const element = array[i];
        const index = i;
        numbers[i] = cb(element, index);
    }
    return numbers;
}

const arr:number[] = [1, 2, 3, 4, 5];

console.log(mapArray1(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray1(arr, subIndex));
// [1, 1, 1, 1, 1]


//4.2
type Fn42=(element:number,index:number,arr:number[])=>boolean

const isUniq:Fn42 = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element:number):boolean => element % 2 === 0;

function filterArray42(array:number[], cb:Fn42) {

    const numbers:number[] = [];
    for (let i = 0; i < array.length; i += 1) {
        const element = array[i];
        const index = i;
      
        if (cb(element, index, array)) {
            numbers.push(element);
        }
    }
    return numbers;
}

const arr42:number[] = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray42(arr42, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray42(arr42, isEven));
// [2, 4, 2]

//4.3

type Fn43 = (accum: number, element: number) => number

const add:Fn43 = (accum, element) => accum + element;
const mult:Fn43 = (accum, element) => accum * element;
const sub:Fn43 = (accum, element) => accum - element;

function reduceArray43(array:number[], cb:Fn43, initial?:number):number {
 
    let i:number=0;
    let accum:any=0;
    if (arguments.length >= 3) {
        accum = initial;
        i = 0;
    }
    if (arguments.length === 2) {
        accum = array[0];
        i = 1;
    }
    
    for (i; i < array.length; i += 1) {
        const element:number = array[i];
       
        accum = cb(accum, element);
    }
    return accum;
}

const arr43:number[] = [1, 2, 3, 4, 5];

console.log(reduceArray43(arr43, add)); // 15
console.log(reduceArray43(arr43, add, 10)); // 25

console.log(reduceArray43(arr43, mult)); // 120
console.log(reduceArray43(arr43, mult, 10)); // 1200

console.log(reduceArray43(arr43, sub));

//4.4
interface IAccount {
    owner: string,
    balance: number,
    discount: number,
    orders: string[],
    changeDiscount(value: number): void,
    showOrders(): string[],
    addOrder(cost: number, order: string): void
}

const account : IAccount = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
        this.discount = value; // Write code in this line
    },
    showOrders() {
        return this.orders; // Write code in this line
    },
    addOrder(cost, order) {
        this.balance -= cost; // Write code in this line
        this.orders.push(order); // Write code in this line
    },
};
const copyAccount:IAccount = Object.assign({}, account);
copyAccount.orders = [...account.orders];


//4.5
interface IInventory{
    items: string[],
    add(itemName: string): string,
    remove(itemName:string):string,
}

const inventory:IInventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        this.items.push(itemName);
        return `Adding ${itemName} to inventory`;
    },
    remove(itemName) {
        this.items = this.items.filter(item => item !== itemName);
        return `Removing ${itemName} from inventory`;
    },
};

type Action=(itemName:string)=>string


const invokeInventoryAction = function(itemName:string, action:Action) {
    const act = action(itemName);
    const msg = `Invoking action on ${itemName}`;
    return { act, msg };
};

const invokeAdd = invokeInventoryAction(
    'Medkit',
    inventory.add.bind(inventory) // Write code in this line
);
const arrayAdd:string[] = [...inventory.items];

console.log(invokeAdd);
//{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

console.log(arrayAdd);
// ['Knife', 'Gas mask', 'Medkit']


const invokeRemove = invokeInventoryAction(
    'Gas mask',
    inventory.remove.bind(inventory) // Write code in this line
);

const arrayRemove:string[] = [...inventory.items];


console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

console.log(arrayRemove);


//5.1

interface IAccount51{
    login: string;
    email: string;
    getInfo(): string;
}

class Account51 implements IAccount51{
    public login: string;
    public email: string;

    constructor( login:string, email:string) {
         this.login = login;
         this.email = email;
    }

    getInfo() {
    return `login : ${this.login}, email: ${this.email}`;
}
}

console.log(typeof Account51.prototype.getInfo);
// 'function'

const mango = new Account51('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());


const poly = new Account51('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'

console.log(typeof Account51.prototype.getInfo);

//5.2

interface IUser52{
    name: string;
    age: number;
    followers: number;
    getInfo():string;
}

class User52 implements IUser52 {
    public name: string;
    public age: number;
    public followers: number
    
    constructor (name: string,age: number,followers: number) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}



console.log(typeof User52);
// 'function'

const mango52 = new User52('Mango', 52, 20);
console.log(mango52.getInfo());

//5.3
interface Storage53{
    items53: string[];
    getItems53(): string[];
    addItem53(item53:string): void;
    removeItem53(item53:string): void;
}

class Storage implements Storage53 {
    public items53: string[];
 
    constructor(items53:string[] = []) {
        this.items53 = items53;
    }
   public getItems53():string[] {
        return this.items53;
    }
   public addItem53(item53:string):void {
        this.items53.push(item53);
    }
   public removeItem53(item53:string):void {
        for (let i = 0; i < this.items53.length; i += 1) {
            if (this.items53[i] === item53) {
                this.items53.splice(i, 1);
            }

        }

    }
}


const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage);

console.log(storage.getItems53());

storage.addItem53('Дроид');
console.log(storage.getItems53());

storage.removeItem53('Пролонгер');
console.log(storage.getItems53());


//5.4

interface StringBuild {
    _value: string;
    value: string;
    append(str: string): void;
    prepend(str: string): void;
    pad(str: string): void;
}
class StringBuilder implements StringBuild {

    _value: string;

    constructor(_value:string) {
        this._value = _value;
    }

   public get value():string {
        return this._value;
    }
   public append(str:string):void {
        this._value += str;
    }
     public  prepend(str:string):void {
        this._value = str + this._value;
    }
   public pad(str:string):void {
        this.append(str);
        this.prepend(str);
    }
}

console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');

console.log(builder.value); // '=^.^='

//5.5

interface ICar{
 
    maxSpeed: number;
    _price: number;
    speed: number|string;
    isOn: boolean;
    distance: number;
 
    turnOn(): void;
    turnOff(): void;
    accelerate(value: number): void;
    decelerate(value: number): void;
    drive(hours: number): void;
}

interface IObj{
    maxSpeed: number;
    price:number
}

class Car implements ICar {
     static getSpecs(car:ICar) {
        return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
    }

   maxSpeed: number;
    _price: number;
    speed: number;
    isOn: boolean;
    distance: number;

    constructor(setObject:IObj, speed = 0, isOn = false, distance = 0, price = 0) {
        this.maxSpeed = setObject.maxSpeed;
        this._price = setObject.price;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;

    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    turnOn() {
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value:number) {
        if (this.speed + value < this.maxSpeed) {
            this.speed += value;
        } else {
            this.speed = this.maxSpeed;
        }
    }
    decelerate(value:number) {
        if (this.speed - value >= 0) {
            this.speed -= value;
        } else {
            this.speed = 0;
        }
    }
    drive(hours:number) {
        if (this.isOn === true) {
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

//6.1

interface Array61{
        id: string,
        name: string,
        email: string,
        eyeColor:string,
        friends: string[],
        isActive: boolean,
        balance: number,
        skills: string[],
        gender: string,
        age: number,
        
    }

const users: Array61[] = [{
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];



const getUserNames = (array:Array61[]):string[]=> array.map(({ name }) => name);


console.log(getUserNames(users));

//6.10

interface User610{
    id: string,
        name: string,
        email: string,
        eyeColor: string,
        friends:string[],
        isActive: boolean,
        balance: number,
        skills: string[],
        gender: string,
        age: number,
}

const users610:User610[] = [{
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];


const getSortedUniqueSkills = (array: User610[]):string[] => array.reduce((acc:string[], { skills }) => [...acc, ...skills], [])
    .sort()
    .filter((value, index, array) => value !== array[index + 1]);

    console.log(getSortedUniqueSkills(users610));


//6.2
const getUsersWithEyeColor = (array:User610[], color:string):User610[] => array.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

//6.3
const getUsersWithGender = (array:User610[], genderFind:string):string[] => array
    .filter(({ gender }) => gender === genderFind)
    .map(({ name }) => name);

console.table(getUsersWithGender(users, 'male'));

//6.4

const getInactiveUsers = (array:User610[]):User610[] => array.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users));

//6.5

const getUserWithEmail65 = (array:User610[], mail:string) => array.find(({ email }) => email === mail);

console.log(getUserWithEmail65(users, 'rossvazquez@xinware.com'));


//6.6

const getUserWithEmail66 = (array:User610[], mail:string) => array.find(({ email }) => email === mail);

console.log(getUserWithEmail66(users, 'rossvazquez@xinware.com'));

//6.7

const calculateTotalBalance = (array:User610[]):number => array.reduce((acc, { balance }) => acc + balance, 0);

console.log(calculateTotalBalance(users));

//6.8

const getUsersWithFriend = (array:User610[], friendName:string):string[] => array.filter(({ friends }) =>
        friends.includes(friendName))
    .map(({ name }) => name);


console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

//6.9
const getNamesSortedBySkillsCount = (array:User610[]):string[] => [...array]
    .sort((a, b) => b.skills.length - a.skills.length)
    .map(({ name }) => name);

console.log(getNamesSortedBySkillsCount(users));

export { }