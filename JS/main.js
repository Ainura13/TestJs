//! 1 otlichie sintaksis
// let arrowFunc = () => {
//     console.log('Hello World!');
// }
// arrowFunc()


// let arrowFunc = () => console.log('Hello World!');
// arrowFunc()
//? return i figurnye skobki mojno ubrat esli vse v odnoi strochke
// let arrowFunc = (arg1, arg2) => arg1 + arg2
// console.log(arrowFunc(7,8))


//? esli tolko odin argument mojno ubrat skobki
// let arrowFunc = arg1 => console.log(arg1);
// arrowFunc(5);

//! 2 v strelochnyh funkciyah net arguments ne pravilno
// let arrowFunc = (arg1,arg2, arg3) => {
//     console.log(...arguments);
// }
// arrowFunc(true, 23, 'makers')

//! 3 Object methodes

// let person = {
//     name: 'John',
//     age: 22,

//     sayHello(){
//         console.log('Hello World');
//     },

//     sayName: function(){
//         console.log(`My name is ${this.name}`);
//     },

//     sayAge: () => console.log(`I'm ${this.age} y.o`)



// }
// // console.log(person.age);
// // person.sayHello();
// // person.sayName();
// // person.sayAge();


// let person2 = {...person};
// // console.log(person2);
// person2.name = 'Kani';
// person2.age = 22;
// person2.sayName();
// person2.sayAge();


// let obj1 ={
//     name: 'Kani',
//     age :20,
//     obj2: {
//         name: 'Kubat',
//         sayName: () => {
//             console.log(`${this.name}`);
//         }
//     }
// }
// obj1.obj2.sayName()



// alert('qwerty');
// console.log(this);
// window.alert('Hello')

// let obj1 = {
//     alert(a){
//         console.log(a + 'OBJ1');
//     },
//     hello: function (){
//         let obj2 = {
//             alert(a){
//                 console.log(a+ 'OBJ2');
//             },
//             hello2: () => {
//                 this.alert('ALERT')
//             }
//         }
//         obj2.hello2()
//     }
// }
// obj1.hello()




//!classwork


// Стрелочные функции, методы объектов, this. Классная работа

// Задание №1
// Создайте стрелочную функцию, которая принимает 2 аргумента и  возвращает сумму всех аргументов.

//===============   REWENIE    ===================

// let arrowFunc = (arg1, arg2) => arg1+ arg2
// console.log(arrowFunc(6,7));


// Задание №2
// Создайте объект user со свойствами name, surname и age.

// Задание №3
// Создайте у объекта user метод SayHi, который будет выводить в консоль “Hello World”.

// Задание №4
// Создайте метод у объекта user, который будет выводить в консоль  его возраст.

// Задание №5
// Создайте метод у user, который будет возвращать полную информацию. Например: Homer Simpson 40

// Задание №6
// Сделайте 3 и 4 задание используя this.


//=================== REWENIE =========================

// let user = {
//     name: 'Homer',
//     surname: 'Simpson',
//     age: 40,

//     sayHi: function(){
//         console.log('Hello World')
//     },
//     sayAge: function(){
//         console.log(this.age);
//     },
//     sayInfo(){
//         console.log(`${this.name} ${this.surname} ${this.age}`);
//     } 

// }
// user.sayHi();
// user.age();
// user.sayFullInfo();





//!!!!!!!!!     T A S K I      !!!!!!!!!!!

//? Задание 1
// Перепишите данную функцию в стрелочную функцию:

// function checkTask() { 
//       console.log("Hello World!"); 
// } 


// let checkTack = () => {
//     console.log("Hello World!"); 
// }


//? Задание 2
// Напишите стрелочную функцию checkTask(), у которой есть параметры age(возраст, число) и name(имя, строка).

// Функция должна выводить поздравление для указанного имени и возраста, в виде такой строки:

// Happy Birthday 'name'! You are 'age'! 
// К примеру, если в аргументы передали 23 и Mike, функция должна вывести строку:

// Happy Birthday Mike! You are 23! 

// let checkTask = (name, age) => {
//     console.log(`Happy Birthday ${name}! You are ${age}!`)
// }
// checkTask('John', 28)






//?Задание 3
// Напишите стрелочную функцию checkTask(), которая принимает в аргументы массив со строками.

// Добавьте к концу каждой строки массива строку 'is cool'.

// Выведите массив в консоль.

// К примеру при передачи в аргументы данного массива ['John', 'Mike', 'Rick', 'Drake'], вывод будет:

// ['John is cool', 'Mike is cool', 'Rick is cool', 'Drake is cool'] 

let checkTask()



// ?Задание 4
// 

// Напишите стрелочную функцию checkTask(), принимающую в качестве аргумента строку.

// Функция должна переворачивать строку и выводить ее в консоль.

// Например, строку "JavaScript", функция выведет как:

// tpircSavaJ


// let checkTask = (str) => {
//     return str.split("").reverse().join("");
//     }
//     console.log(checkTask("JavaScript"));

//?pravilnoe
// let checkTask = (str) => {
//     let res = str.split("").reverse().join("");
//     console.log(res);
//     }


//? zadanie 5
// let checkTask =(str, num) => {
//     let sum=0;
//     for(i=0; i<str.length; i++){
//         if(num== str[i]){
//             sum++ 
//         }
//     }
//     console.log(sum)
// }




//? zadanie 9

// Напишите стрелочную функцию checkTask(), которая принимает в аргументы число, обозначающее количество часов.

// Функция должна возвратить количество секунд в переданых часах.

// К примеру, если передали число 8, функция должна возвратить:

// 28800 



// let checkTask =(num) => num * 3600


//Zadanie 6

// let newArr = [];
// let checkTask = (arr) => {
//     for(i=0; i<arr.length; i++){
//         arr[i]*=5;
//         if(arr[i]%2 ===0){
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }



//=============7 ===========

// let checkTask = (str)=>{
//     if(str = 'User'){
//         return("Hello User")
//     }else {
//         return ('"Error"')
//     }
// }
// checkTask('Avcd')


//     ==============   10   ================


// let checktask = (first, second) => {
//     if(first % second ===0){
//         return true
//     }else {
//         return false
//     }
// }
// checktask(5,2)



//================ 11 ================

// let checkTask = {
//     language: 'JS',
//     framework: 'React',

//     describe(){
//         return this.language + this.framework
//     }
// }
// checkTask.describe()


// ========= 8 ===========

// let checkTask = (min) => {
//     switch(min){
//         case (min>0 && min<15):
//         console.log('Pervaya chetvert')
//         break;
//         case (min>=15 && min<30):
//         console.log('Vtoraaya chetvert')
//         break;
//         case (min>=30 && min<45):
//         console.log('Tretya chetvert')
//         break;
//         case (min>=45 && min<60):
//         console.log('Pervaya chetvert')
//         break;
//         default: console.log('Invalid Input')
//     }
// }
// checkTask(1)






//? zadanie 10

// Напишите стрелочную функцию checkTask(), у которой есть параметры first и second.

// Функция должна проверять делится ли без остатка first на second, если делится возвращать true, иначе возвращать false.

// К примеру, получив числа 5 и 2, функция возвратит с помощью return:

// false 

// let checkTask = (first, second) =>{
//     if(first%second ===0){
//         console.log(true)
//     }else {
//         console.log(false)
//     }
//     } 
    

//? Zadanie 11


//!zadachi na zakreplenie 

// ======= 2 ========


// function checkTask(result){
//     if(result >23 && result<40){
//         return console.log('Hello')
//     }else{
//         return console.log('Goodbye')
//     }
// }
// checkTask(40)


//========== 3 ===========

// function checkTask(result){
//     return result > 23 && result < 40 ? console.log('Hello') : console.log('Goodbye')
// }
// checkTask(34)


// ========= 4 ========

// function checkTask(season){
//     switch(season){
//         case 1: return("зима");
//         break;
//         case 2: return("весна");
//         break;
//         case 3: return("лето");
//         break;
//         case 4: return("осень");
//         break;
//         default: return("Неправильное число")
//     }
// }
// console.log(checkTask(5))


//========== 5 ============

// function checkTask(){
//     for (i=1; i<100; i++){
//         if(i%2 ===0){
//             console.log(i)
//         }
//     }
// }



//========= 6 ===========

// function checkTask(num){
//     function(){
//         return num + 1;
//     }
//     function(){
//         return num - 1;
//     }
//     function(){
//         return num * 2;
//     }
//     function(){
//         return num % 2;
//     }
// }
// console.log(checkTask(4))



//==========7 ==========

