// Главное меню для выбора программы
function mainMenu() {
    console.log("=== ДОБРО ПОЖАЛОВАТЬ В КОЛЛЕКЦИЮ JS-ПРОГРАММ ===");
    
    const choice = prompt(
        "Выберите программу:\n\n" +
        "1. Калькулятор любви\n" +
        "2. BMI Калькулятор\n" +
        "3. Проверка високосного года\n" +
        "4. Кто оплачивает ужин?\n" +
        "5. Выйти\n\n" +
        "Введите номер (1-5):"
    );
    
    switch(choice) {
        case '1':
            loveCalculator();
            break;
        case '2':
            bmiCalculator();
            break;
        case '3':
            checkLeapYear();
            break;
        case '4':
            // Можно выбрать базовую или улучшенную версию
            const version = prompt("Выберите версию:\n1. Базовая (готовый список)\n2. Расширенная (ввод своего списка)");
            if (version === '2') {
                dinnerPayerAdvanced();
            } else {
                dinnerPayer();
            }
            break;
        case '5':
            console.log("До свидания!");
            alert("До свидания!");
            return;
        default:
            alert("Пожалуйста, выберите число от 1 до 5!");
            mainMenu();
    }
    
    // Предлагаем выбрать другую программу
    const again = confirm("Хотите запустить другую программу?");
    if (again) {
        mainMenu();
    }
}

// Запускаем меню при загрузке страницы
console.log("Страница загружена!");
mainMenu();

// Калькулятор любви
function loveCalculator() {
    console.log("=== Калькулятор любви ===");
    
    // Запрашиваем имена у пользователя
    const firstName = prompt("Введите первое имя:");
    const secondName = prompt("Введите второе имя:");
    
    // Проверяем, что пользователь ввел имена
    if (!firstName || !secondName) {
        alert("Пожалуйста, введите оба имени!");
        return;
    }
    
    // Генерируем случайный процент (от 0 до 100)
    // В реальности здесь могла бы быть сложная формула :)
    const result = Math.floor(Math.random() * 101);
    
    // Формируем сообщение
    const message = `${firstName} подходит к ${secondName} на ${result}%!`;
    
    // Выводим результат
    alert(message);
    console.log(message);
    
    // Дополнительные комментарии в зависимости от результата
    if (result > 80) {
        console.log(" Идеальная пара!");
    } else if (result > 50) {
        console.log(" Хорошие шансы!");
    } else if (result > 20) {
        console.log(" Возможно, стоит подумать...");
    } else {
        console.log(" Лучше поискать другого!");
    }
}

// Запускаем калькулятор любви
loveCalculator();

// BMI Калькулятор
function bmiCalculator() {
    console.log("\n=== BMI Калькулятор ===");
    
    // Запрашиваем данные у пользователя
    const weight = parseFloat(prompt("Введите ваш вес (в кг):"));
    const height = parseFloat(prompt("Введите ваш рост (в метрах):"));
    
    // Проверяем корректность ввода
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Пожалуйста, введите корректные данные!");
        return;
    }
    
    // Вычисляем BMI по формуле: вес / (рост²)
    const bmi = weight / (height * height);
    
    // Округляем до двух знаков после запятой
    const roundedBmi = bmi.toFixed(2);
    
    // Определяем категорию
    let category;
    if (bmi <= 18.5) {
        category = "Недостаточный вес";
    } else if (bmi <= 25) {
        category = "Нормально";
    } else if (bmi <= 30) {
        category = "У вас излишек веса";
    } else {
        category = "Ожирение";
    }
    
    // Формируем сообщение
    const message = `Ваш BMI: ${roundedBmi}\n${category}`;
    
    // Выводим результат
    alert(message);
    console.log(`Вес: ${weight} кг, Рост: ${height} м`);
    console.log(`BMI: ${roundedBmi} (${category})`);
    
    // Дополнительная информация
    console.log("Справка по категориям BMI:");
    console.log("- До 18.5: Недостаточный вес");
    console.log("- 18.5-25: Нормальный вес");
    console.log("- 25-30: Излишек веса");
    console.log("- Выше 30: Ожирение");
}

// Запускаем BMI калькулятор
bmiCalculator();

// Проверка високосного года
function checkLeapYear() {
    console.log("\n=== Проверка високосного года ===");
    
    // Запрашиваем год у пользователя
    const yearInput = prompt("Введите год для проверки:");
    const year = parseInt(yearInput);
    
    // Проверяем корректность ввода
    if (isNaN(year) || year <= 0) {
        alert("Пожалуйста, введите корректный год!");
        return;
    }
    
    // Проверяем, является ли год високосным
    let isLeap = false;
    
    // Правила проверки високосного года:
    // 1. Делится на 4?
    // 2. Если да, делится на 100?
    // 3. Если да, делится на 400?
    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true;  // Делится на 400 - високосный
            }
            // Делится на 100, но не на 400 - не високосный
        } else {
            isLeap = true;  // Делится на 4, но не на 100 - високосный
        }
    }
    
    // Формируем результат
    const result = isLeap ? "Високосный год" : "Не является високосным";
    const message = `${year} год: ${result}`;
    
    // Выводим результат
    alert(message);
    console.log(message);
    
    // Объясняем почему
    console.log("Объяснение:");
    if (isLeap) {
        console.log(` ${year} делится на 4`);
        if (year % 100 === 0) {
            console.log(` ${year} делится на 100 и на 400`);
        }
        console.log("→ Поэтому это високосный год (366 дней)");
    } else {
        if (year % 4 !== 0) {
            console.log(` ${year} не делится на 4`);
        } else if (year % 100 === 0 && year % 400 !== 0) {
            console.log(` ${year} делится на 4 и 100`);
            console.log(` ${year} не делится на 400`);
        }
        console.log("→ Поэтому это не високосный год (365 дней)");
    }
}

// Запускаем проверку високосного года
checkLeapYear();

// Кто оплачивает ужин?
function dinnerPayer() {
    console.log("\n=== Кто оплачивает ужин? ===");
    
    // Массив имен 
    const names = ['Дима', 'Катя', 'Петр', 'Лена'];
    
    // Выводим список участников
    console.log("Список участников ужина:");
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
    
    // Выбираем случайного человека из массива
    const randomIndex = Math.floor(Math.random() * names.length);
    const payer = names[randomIndex];
    
    // Формируем сообщение
    const message = `Оплачивать будет ${payer}!`;
    
    // Выводим результат
    alert(message);
    console.log(message);
    
    // Дополнительная информация
    console.log(`Случайное число: ${randomIndex + 1} (${randomIndex} в массиве)`);
    console.log(`Всего участников: ${names.length}`);
}

// Запускаем выбор плательщика
dinnerPayer();

// Улучшенная версия "Кто оплачивает ужин?"
function dinnerPayerAdvanced() {
    console.log("\n=== Улучшенный выбор плательщика ===");
    
    // Запрашиваем список имен у пользователя
    const input = prompt("Введите имена через запятую:\n(например: Дима, Катя, Петр, Лена)");
    
    // Проверяем, что пользователь что-то ввел
    if (!input || input.trim() === '') {
        alert("Пожалуйста, введите имена!");
        return;
    }
    
    // Разбиваем строку на массив имен
    const names = input.split(',')
        .map(name => name.trim())  // Убираем лишние пробелы
        .filter(name => name !== '');  // Убираем пустые строки
    
    // Проверяем, что есть хотя бы 2 имени
    if (names.length < 2) {
        alert("Нужно ввести хотя бы два имени!");
        return;
    }
    
    // Выводим список участников
    console.log("Список участников ужина:");
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
    
    // Выбираем случайного человека
    const randomIndex = Math.floor(Math.random() * names.length);
    const payer = names[randomIndex];
    
    // Формируем сообщение
    const message = `Среди ${names.length} человек...\nОплачивать будет ${payer}!`;
    
    // Выводим результат с анимацией (в консоли)
    console.log("Выбираем плательщика...");
    setTimeout(() => {
        console.log(" Бросаем кубик...");
        setTimeout(() => {
            console.log(` Выпало число: ${randomIndex + 1}`);
            alert(message);
            console.log(message);
        }, 500);
    }, 500);
}

// Запускаем улучшенную версию
dinnerPayerAdvanced();