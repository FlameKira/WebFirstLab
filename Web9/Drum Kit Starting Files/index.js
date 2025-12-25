// Массив объектов для каждой кнопки барабана с соответствием клавиш и звуков
// ИСПРАВЛЕННЫЕ ПУТИ К ФАЙЛАМ
const drums = [
  { key: 'w', sound: 'sounds/crash.mp3', name: 'Crash Cymbal' },
  { key: 'a', sound: 'sounds/kick-bass.mp3', name: 'Kick Bass' },
  { key: 's', sound: 'sounds/snare.mp3', name: 'Snare Drum' },
  { key: 'd', sound: 'sounds/tom-1.mp3', name: 'Tom 1' },
  { key: 'j', sound: 'sounds/tom-2.mp3', name: 'Tom 2' },
  { key: 'k', sound: 'sounds/tom-3.mp3', name: 'Tom 3' },
  { key: 'l', sound: 'sounds/tom-4.mp3', name: 'Tom 4' }
];

// Объект для хранения аудио элементов
const audioElements = {};

// Функция для предзагрузки звуков с отладкой
function preloadSounds() {
  console.log('🔊 Preloading sounds...');
  
  for (let i = 0; i < drums.length; i++) {
    const drum = drums[i];
    try {
      const audio = new Audio(drum.sound);
      audioElements[drum.key] = audio;
      console.log(`✅ Loaded sound: ${drum.sound} for key: ${drum.key}`);
    } catch (error) {
      console.error(`❌ Error loading sound ${drum.sound}:`, error);
    }
  }
}

// Функция для воспроизведения звука
function playSound(key) {
  const audio = audioElements[key];
  if (audio) {
    // Сбрасываем воспроизведение на начало
    audio.currentTime = 0;
    
    // Пробуем воспроизвести звук
    audio.play()
      .then(() => {
        console.log(`▶️ Playing sound for key: ${key}`);
      })
      .catch(error => {
        console.error(`❌ Error playing sound for key ${key}:`, error);
        // Показываем предупреждение пользователю
        alert(`Cannot play sound for ${key}. Check if file exists: ${drums.find(d => d.key === key).sound}`);
      });
  } else {
    console.error(`❌ No audio loaded for key: ${key}`);
    alert(`Sound not loaded for ${key}. Check console for errors.`);
  }
}

// Функция для добавления/удаления эффекта нажатия
function addPressedEffect(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    // Добавляем класс для визуального эффекта
    button.classList.add('pressed');
    
    // Убираем класс через 100мс
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 100);
  }
}

// Функция-обработчик клика по кнопке
function handleDrumClick(event) {
  // Получаем класс кнопки (w, a, s и т.д.)
  const buttonClasses = event.currentTarget.className.split(' ');
  // Второй класс - это ключ (w, a, s, d, j, k, l)
  const key = buttonClasses[1];
  
  // Воспроизводим звук
  playSound(key);
  
  // Добавляем визуальный эффект
  addPressedEffect(key);
}

// Функция-обработчик нажатия клавиши на клавиатуре
function handleKeyDown(event) {
  const key = event.key.toLowerCase();
  
  // Проверяем, есть ли такая клавиша в нашем наборе
  const validKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
  if (validKeys.includes(key)) {
    // Предотвращаем стандартное поведение браузера для этих клавиш
    event.preventDefault();
    
    // Воспроизводим звук
    playSound(key);
    
    // Добавляем визуальный эффект
    addPressedEffect(key);
  }
}

// Функция для добавления обработчиков событий к кнопкам с использованием цикла for
function setupEventListeners() {
  // Находим все кнопки барабанов
  const drumButtons = document.querySelectorAll('.drum');
  
  console.log(`🎯 Found ${drumButtons.length} drum buttons`);
  
  // ИСПОЛЬЗУЕМ ЦИКЛ FOR для добавления обработчика событий к каждой кнопке
  for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', handleDrumClick);
    console.log(`✅ Added click listener to button ${i + 1}: ${drumButtons[i].className}`);
  }
  
  // Добавляем обработчик нажатия клавиш
  document.addEventListener('keydown', handleKeyDown);
  console.log('✅ Added keyboard listener');
}

// Функция для вывода сообщения о загрузке
function showReadyMessage() {
  console.log('🎵 Drum Kit initialized and ready to play!');
  console.log('🎹 Press keys W, A, S, D, J, K, L or click the buttons');
  console.log('🔊 Sounds loaded for keys:', Object.keys(audioElements));
}

// Основная функция инициализации
function initDrumKit() {
  console.log('🚀 Initializing Drum Kit...');
  
  // Предзагружаем звуки
  preloadSounds();
  
  // Настраиваем обработчики событий с использованием цикла for
  setupEventListeners();
  
  // Показываем сообщение о готовности
  showReadyMessage();
  
  // Добавляем подсказку в консоль для отладки
  console.log('🛠️ For debugging:');
  console.log('1. Check console for any errors');
  console.log('2. Verify sound files exist in sounds/ folder');
  console.log('3. Verify image files exist in images/ folder');
  console.log('4. Check browser console for network errors');
}

// Инициализируем Drum Kit когда страница полностью загружена
document.addEventListener('DOMContentLoaded', initDrumKit);