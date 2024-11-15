/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n){
    return (n & n) === n;
}

//console.log(isInteger(1.2));
/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even(){
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
}

//console.log(even())
/**
 * Напишите функцию, считающую сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n){
    return n * (2 + (n - 1)) / 2;
}

//console.log(sumTo(100))
/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n){
    return n === 1 ? 1 : n + recSumTo(n - 1);
}

//console.log(recSumTo(232));
/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n){
    return n === 0 ? 1 : n * factorial(n - 1);
}

//console.log(factorial(5));
/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n){
    return n <= 1 ? (n === 1 ? true : false) : (n % 2 === 1 ? false : isBinary(n >> 1)); 
}

// for(let i = 1; i < 1000000; ++i)
//     if (isBinary(i))
//         console.log(i);
/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n){
    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// for(let i = 1; i < 20; ++i)
//     console.log(fibonacci(i));
/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn){
    let tmp = initialValue;
    return function(initialValue){
        if (typeof operatorFn !== 'function') return tmp;
        tmp = operatorFn(tmp, initialValue);
        return tmp;
    } 
}

// const sumFn =  getOperationFn(10, (a,b) => a + b);
// console.log(sumFn(5))
// console.log(sumFn(3))
/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start=0, step=1){
    let start_mod = start - step;
    return function(){
        return start_mod += step;
    }
}
// const generator1 = sequence(10, 3);
// const generator2 = sequence(8, 2);
// console.log(generator1()); //10
// console.log(generator1()); //13
// console.log(generator2()); //8
// console.log(generator1()); //16
// console.log(generator2()); //10

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if(firstObject === secondObject)
        return true
    //проверка что один нулл а другой не нулл(чтоб не зашли в следующий иф)
    if(firstObject === null || secondObject === null)
        return false;
    //заходим если ток два обжекта и они не нулл(один из них)
    if (typeof(firstObject) === "object" && typeof(secondObject) === "object"){
        //проверяем что одинаковое колво свойств
        if(Object.keys(firstObject).length !== Object.keys(secondObject).length)
            return false;
        //получаем все значения свойств
        let k1 = Object.keys(firstObject);
        let k2 = Object.keys(secondObject);
        //цикл по всем ключам (проверяем сначала что в другом объекте есть такой ключ а потом уже сами свойства(рекурсивно по всем))
        for (let key of k1) {
            if (!k2.includes(key) || !deepEqual(firstObject[key], secondObject[key]))
                return false;
        }
        return true;
    }
    //отдельная проверка на наны
    if((firstObject !== firstObject) && (secondObject !== secondObject))
        return true;
    //если один обжект а другой нет
    return false;
}
// const dummyFunction = () => {};
// console.log("first block");
// console.log(deepEqual({text: 'some text', count: 3, arr: [11, 22]},{text: 'some text', count: 3, arr: [11, 22]})); //true
// console.log(deepEqual({obj: {count: 12}, value: null, flag: true},{obj: {count: 12}, value: null, flag: true})); // true
// console.log(deepEqual({obj: {arr: ['a', 'b']}, value: undefined},{obj: {arr: ['a', 'b']}, value: undefined})); // true
// console.log(deepEqual({func: dummyFunction}, {func: dummyFunction})); //true
// console.log(deepEqual({a: 'a', b: 'b'}, {b: 'b', a: 'a'})); //true
// console.log(deepEqual(NaN, NaN)); //true
// console.log(deepEqual(null, null)); // true

// console.log("second block");
// console.log(deepEqual({text: 'some text', count: 3, arr: [11, 22]},{text: 'some text1', count: 4, arr: [11, 22]})); // false
// console.log(deepEqual({obj: {count: 12}, value: null, flag: true},{obj: {count: 22}, value: null, flag: false})); // false
// console.log(deepEqual({obj: {arr: ['a', 'b']}, value: undefined},{obj: {arr: ['a', 'b']}, value: null})); // false
// console.log(deepEqual({obj: {arr: [1, 2, 3]}, value: 'null', n: 0},{obj: {arr: [1, 2]}, value: 'null', n: 0})); // false
// console.log(deepEqual({obj: {arr: [1, 0]}}, {obj: {arr: [1, null]}})); // false

// console.log("three block");
// console.log(deepEqual(0, 1)); // false
// console.log(deepEqual(null, {obj: {arr: [1, null]}})); // false
// console.log(deepEqual(null, 0)); // false
// console.log(deepEqual(null, undefined)); // false
// console.log(deepEqual({func: dummyFunction}, {func: () => {}})); // false

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
