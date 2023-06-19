                     //переменные - маалыматты сактаган кутуча

const newLocal = 'black'
/*var name = 'akzhol';
var email = 'njvdbf2gamil.com';
var surname = 'Samyibekov';
var years = '23';

//camelCase - ичинде бир канча данный сакталат
var nameAndSurname = 'Akzholbek Samyibekov'

console.log(nameAndSurname)

                     // тип данных
//1.String - Текст
var name1 = 'Minato';
console.log(typeof name1)
// методы - ар бир тип данныйдын өз методу болот
// метод String
// метод toUpperCase()-бул тамгалардын баарын чоң кылыт
// метод toLowerCase()-бул тамгаларды баарын кичине кылат
// метод length-бул текстин узундугун, канча тамга бар
// метод repeat()- бул тексти кайталап чыгарат
console.log(name1.repeat(7))


// 2. Nummber- число
// метод toString() - бул метод кошулса анда сан текст айланат
 var Nummber = 90;
 console.log(typeof Nummber.toString())

// 3. boolean- true, false
// <, >, <=, >=, ==, !=, !==
var Nummber1 = 3;
var Nummber2 = 4;
console.log(Nummber1 < Nummber2)

                  
                     //Условные конструкции - if, else if, else
/*var userLogin = 'samyibekov';
var userPassword = '01012000';

var login = prompt('Enter your login').toLowerCase;
var password = prompt('Enter your password');

if(userLogin==login && userPassword===password ){
   alert('Welcome')
}else{
   alert('Sarry')
}*/ 

// 4. Null разработчик пищит сам
//var address = null

// 5.Undefind- не определено. программа сам присваивает
//let name; console.log(name)

// 6.object
/*var objectUser = {
   myMame: 'Akzhol',
   surNam: 'Samyibekov',
   number:  9090909,
   adress: 'null',
   Object: {
      undef: 'Undefined'
   }
}
console.log (objectUser)
console.log (objectUser.myMame)
console.log (objectUser.Object.undef)

// методы обекта
objectUser.course = 'Geek' //добовление
objectUser['number'] = 890 //изменить
delete objectUser.adress
console.log(objectUser)  // удалить

console.log(Object.keys(objectUser)) // ключтөрүн чыгырып берет
console.log(Object.values(objectUser)) // значениесин гана чыгарып берет
console.log(Object.entries(objectUser)) // ключ и значениелеин чыгарып берет
console.log(Object.hasOwnProperty('adress')) // название ключ менен издесе болот
*/

// 7.bigint
/*var int = 78n
console.log(int)
// 8.symbol*/

// Тапшырма
// in - B 
/*var starbucks = {
   dricks:{
      coffee:{
      latte:'Latte',
      cappuccino:'cappuccino',
      americano:'americano'
   },
   tea:{
      black:'balck',
      green:'green'
   }
  }
}
var order = prompt('order')

if(order in starbucks.dricks.coffee || order in starbucks.dricks.tea){
   console.log ('Заказ принят')
}else{

   console.error('errer')
}

// ||- или,  &&-и

/*var name2 = prompt('Сиздин атыңыз')
var surname1 = prompt('Сиздин фамтляңыз')
var years = prompt('Сиздин жашыңыз')

if(years <= 18){
   console.log('Салам!' + surname1 + name2)
}else if(years >= 19 && years <= 86){
 console.log('Ассламу адейкум!' + surname1 + name2)  
} else{
 console.log('ката чыкты')
}

/*var inn = '03234567890123';
var firsNum = Number(inn[0])
if(( firsNum === 1 || firsNum === 2|| firsNum === 0) && inn.length === 14){
   console.log('ИНН табылды')
} else {
   console.error('ИНН не найден')
}*/

