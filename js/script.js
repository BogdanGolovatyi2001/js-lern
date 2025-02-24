// let a =10;
// console.log(a); 
// a=20;
// console.log(a); 

// const b = 15;
// console.log(b);

// const value = "3";
// console.log (typeof (value));
// console.log(Number(value));
// console.log (typeof Number(value));

// let name = "ola";
// let hello = `hello ${name}`;
// console.log(hello);

// let name="Ivan";
// let city;

//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city;
// city = name;
// console.log(city);


//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c =  " 12.9sxdcfgv";
 
// console.log(typeof Number(a));
// console.log(typeof parseInt( b)); 
// console.log(typeof parseFloat(c)); 


// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((0.1*10 + 0.2*10)/10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random ()*(4-2)+2);
//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = "olga";
// user.age = "30";
// user.city = "Kyiv";
// console.log(user);
// delete user.city;
// console.log(user);
// user["like flowers"] = true;
// console.log(user);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (kay in user){
//     console.log(kay);
//     console.log(user[kay]);
// }


// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
let c = -1;
console.log(c<0);

let a = 0;
if (a > 0){
    console.log(true);
}
 else if (a < 0){
    console.log(false);
}
else {
    console.log("null");
}

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

let b = "true";
switch (b) {
   case "test":
    console.log(true);
break;

default:  console.log(false);
}

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

let v = 10;

if (v > 10) {
    v = v - 5;
} else if (v < 10) {
    v = v + 5;
} else {
   
}

console.log(v);


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

let namemis;
const numermis= Number(prompt("введіть число"));

switch (numermis){

        case 1:
            namemis = "sichen";
            break;

        case 2:
            namemis = "lutui";
            break;

        case 3:
            namemis = "berezen";
            break;
         case 4:
            namemis = "kviten";
            break;   

}
console.log(namemis);



//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
