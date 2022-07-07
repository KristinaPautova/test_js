// * Деструктурирующее присваивание – это специальный синтаксис,
// * который позволяет нам «распаковать» массивы или объекты
// * в кучу переменных, так как иногда они более удобны.

// ? Деструктуризация массивов
// const arr = [100,200,300,400,500];
// let [a,b,s,d,e] = arr;
// console.log(a,b,s,d,e);
// console.log(arr)

// let food = ['eggs','butter','milk','bread','kaimak'];
// let [item1,item2, ...other] = food
// console.log(item1,item2,other);

// ? rest оператор - собирает оставшиеся элементы в одну переменую. Ставит

// Подмена переменных
// let a = 'a';
// let b = 'b';
//
// // let temp = a;
// // a = b;// в переменной а хранится 'a'
// // b = temp // в переменной b хранится 'b'

// let a = 'a';
// let b = 'b';
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// let month = "2022";
// let year = "January";
// let day = "12:44";
// let minute = "Sunday";
// [month,year,day,minute] = [year,month,minute,day]
// console.log(month,year,day,minute)

// let date = Date();
// console.log(date);

// ? Деструктуризация объекта

let artist = {
    name: 'Michael',
    lastName: 'Jackson',
    position: 'singer',
}

// let {name,position,lastName} = artist;
// console.log(name,lastName,position);
// let {position: profession} =artist;
// console.log(profession);
// console.log(position);

// let objectStronng = {
//     gun: "Автомат",
//     model: "AK-47",
//     author: 'Калашников',
//     ttx: {
//         distance: '1,4km',
//         zapas: '20',
//         info: {
//             speed:'680м/с'
//         }
//     },
// };
//
// let {ttx:{zapas, info: {speed: a=700}}} = objectStronng;
// console.log(zapas,a)

// let str = "Code U";
// let [c, , , e, ,u] = str;
// console.log(c,e,u)

// Конкатинация массивов

// let num1 = [10,20];
// let num2 = [30,40];
// let sumNum = [...num1,...num2];
// console.log(sumNum);
//
// let obj1 = {name1: 'Sherlock', lastName1: 'Holms'};
// let obj2 = {name2: "John", lastName2: 'Whatson'}
// let allobj = {...obj1,...obj2}
// console.log(allobj)

//JSON.parse() && JSON.stringify()

// JSON.stringify() преобразует переданный элемент в строку с форматом JSON.
// Затем JSON.parse ()
// преобразует его обратно в объект JavaScript, это позволяет выполнять глубокое
// клонирование и для вложенных объектов, чего не происходит с оператором Spread.
// ?  минус

// let car1 = {color: 'red', wheels: {amount: 4}};
// let car2 = JSON.parse(JSON.stringify(car1))
// // let car2 = car1;// присвание,но не копирование
// // let car2 = {...car1}; // spret - поверхностное копирование,
// // let car2 = JSON.stringify(car1);
// // console.log('Сделали парсинг',car2)
// // car2 = JSON.parse(car2)
// car2.color = "black"
// car2.wheels.amount = 10;
// console.log(car1);
// console.log(car2);

let person1 = {
    name: 'Jack',
    age: 19,
    favoriteFood: ['Lagman', 'Manty'],
    pet: {
        name: 'Sharik',
        age: 2,
    },
    study: {
        university: 'KSTU',
        subjects: ['Math', 'Literature'],
        location: {
            str: 'Manas str 66',
            city: 'Bishkek',
        },
    },
};

//  lagman and manty, sharik, KSTU, Literature, Bishkek, mail-index
let {favoriteFood:[Lagman,Manty], pet:{name:sharik},study:{university, subjects:[, Literature], location:{city}},index = "mail-index"} = person1

// console.log(Lagman,Manty,sharik, university,Literature,city,index)

//
// let arr = [4,  3, 4,4, 2, 3, 1, 3, 4];
// let maxCount = 0
// let arrSum = 0
// for(let i = 0; i< arr.length;i++){
//   let  count = 0;
//     for(let j = 1; j< arr.length;j++){
//         if(arr[i] === arr[j] ){
//             count++;
//                 if(count > maxCount){
//                     maxCount = count;
//                      arrSum = arr[i]
//                 }
//         }
//     }
//
// }
// console.log(arrSum);