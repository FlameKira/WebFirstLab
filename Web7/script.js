// 1. Выводим любое значение
console.log("Начало программы!");

// 2. Две переменные с числами
var a = 10;
var b = 5;
console.log("Переменная a = " + a);
console.log("Переменная b = " + b);

// 3. Сложение переменных
var sum = a + b;
console.log("Сумма a + b = " + sum);

// 4. Работа со строками
var text = "Hello World";
console.log("Оригинальный текст: " + text);
console.log("Верхний регистр: " + text.toUpperCase());
console.log("Нижний регистр: " + text.toLowerCase());

// 5. Все математические операции
console.log("Сложение: " + (a + b));
console.log("Вычитание: " + (a - b));
console.log("Умножение: " + (a * b));
console.log("Деление: " + (a / b));
console.log("Остаток от деления: " + (a % b));
console.log("Квадрат числа a: " + (a * a));
console.log("Квадрат числа b: " + Math.pow(b, 2));

// 6. Мои задания
console.log("--- Мои задания ---");

// Задание 1: Проверка четности числа
var number = 7;
if (number % 2 === 0) {
    console.log("Число " + number + " четное");
} else {
    console.log("Число " + number + " нечетное");
}

// Задание 2: Конвертер валют
var dollars = 100;
var exchangeRate = 90; // курс рубля к доллару
var rubles = dollars * exchangeRate;
console.log(dollars + " долларов = " + rubles + " рублей");

console.log("Программа завершена!");