# Tailwind

## Чому це ефективно?
* Пурджинг (purging): Tailwind видаляє всі невикористовувані класи під час компіляції.
* Розмір CSS: Залишається лише необхідний набір стилів.
* Динаміка: Можна гнучко додавати стилі прямо в HTML, і нові стилі генеруються автоматично при компіляції

## 1. Tailwind через CDN (перший варіант):

* Як працює: Завантажується повна версія стилів Tailwind, яка включає всі можливі утиліти.
* Мінус: CSS-файл досить великий (~3-4 МБ).
* Плюс: Швидке підключення, без компіляції.
* Коли використовувати: Для швидкого прототипування або невеликих проектів.

### Практичне застосування

###### Відкрийте файл index.html і додайте посилання на Tailwind CSS через CDN у <head:

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Example</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.0.0/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-4xl font-bold text-blue-500">Привіт, Tailwind!</h1>
</body>
</html>
```

* Збережіть зміни та відкрийте index.html у браузері.
* Перевірка роботи: Заголовок має бути синього кольору і великим шрифтом.

## 2. Підключення Tailwind через PostCSS (більш гнучкий та кращий підхід)
* Як працює:
    * Tailwind аналізує HTML, CSS або JS файли під час компіляції.
    * Генеруються лише ті класи, які реально використовуються у твоєму проєкті.
* Перевага: Значно менший розмір кінцевого CSS-файлу, зазвичай лише кілька кілобайт.
* Мінус: Потрібна додаткова конфігурація і компіляція.
* Коли використовувати: Для великих або продуктивних проектів (завжди).

### Практичне застосування

#### Крок 1: Ініціалізація проекту

* Переконайтеся, що у вас встановлений Node.js.
* Відкрийте термінал і перейдіть у вашу директорію:
```bash
cd /path/to/your/project
```
* Ініціалізуйте package.json:
```bash
npm init -y
```

#### Крок 2: Встановіть Tailwind CSS, PostCSS і Autoprefixer

* Виконайте в терміналі:

```bash
npm install tailwindcss postcss autoprefixer --save-dev
```

#### Крок 3: Ініціалізуйте Tailwind CSS
* Створіть файл конфігурації Tailwind:
```bash
npx tailwindcss init
```
Це створить `tailwind.config.js` у вашій папці.


#### Крок 4: Налаштуйте PostCSS
* Створіть файл `postcss.config.js` у вашому проєкті:

```javaScript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### Крок 5: Налаштуйте `style.css` для Tailwind
Відкрийте або створіть `style.css` і додайте ці директиви:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Крок 6: Скомпілюйте Tailwind CSS
Виконайте команду для генерації `CSS`:
```bash
npx tailwindcss -i ./style.css -o ./dist/output.css --watch
```
Це створить файл output.css у папці `dist`.

#### Крок 7: Підключіть скомпільований CSS до index.html
* Оновіть `index.html`, додавши посилання на output.css:
```html
<link rel="stylesheet" href="dist/output.css">
```

#### Крок 8: Перевірка верстки
* Додайте до `index.html` якийсь контент із класами Tailwind:
```html
<h1 class="text-4xl text-green-600">Tailwind працює!</h1>
```

## 3 Налаштування змінних кольорів у Tailwind CSS

У цьому розділі ми додамо власні кольорові змінні до конфігурації Tailwind і використаємо їх у вашому проєкті.

#### Крок 1: Відкрийте файл конфігурації `tailwind.config.js`

* Знайдіть файл `tailwind.config.js`, який було створено раніше. Відкрийте його у текстовому редакторі.

#### Крок 2: Додайте власні кольори до секції `theme.extend`

* Оновіть конфігурацію, додавши ваші кастомні кольори:

```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
        accent: '#10B981',
      },
    },
  },
  plugins: [],
}
```

#### Крок 3: Додаємо необхідний блок до index.html

```html
<h2 class="text-[20px] text-green-600">Приклад використання колльорів</h2>
<div class="text-primary text-4xl font-bold">
    Привіт з основним кольором!
</div>
<div class="text-secondary text-2xl">
    Це текст із вторинним кольором.
</div>
<div class="bg-accent p-4 text-white">
    Блок із фоновим кольором акценту.
</div>
```

## 4 Налаштування Breakpoints у Tailwind CSS

У цьому розділі ми додамо та налаштуємо breakpoints (точки зламу) у Tailwind CSS та створимо приклад `flex`-макета, який змінює розташування елементів залежно від ширини екрану.

#### Крок 1: Використання стандартних breakpoints у Tailwind CSS

Tailwind CSS вже має стандартні breakpoints, які можна використовувати для адаптивного дизайну:

* `sm` — мінімальна ширина 640px
* `md` — мінімальна ширина 768px
* `lg` — мінімальна ширина 1024px
* `xl` — мінімальна ширина 1280px
* `2xl` — мінімальна ширина 1536px

#### Крок 2: Приклад `flex`-макета з адаптивною поведінкою

Додайте наступний HTML-код до вашого `index.html`, щоб продемонструвати адаптивний `flex`-макет:

```html
<h2 class="text-[20px] text-blue-600 mb-4">Адаптивний Flex-макет</h2>
<div class="flex flex-col md:flex-row gap-4 p-4 border border-gray-400">
  <div class="bg-primary text-white p-4 flex-1">
    Елемент 1
  </div>
  <div class="bg-secondary text-white p-4 flex-1">
    Елемент 2
  </div>
  <div class="bg-accent text-white p-4 flex-1">
    Елемент 3
  </div>
</div>
```

## 5 Налаштування кастомних Breakpoints у Tailwind CSS

#### Крок 1: Додавання кастомних breakpoints

* оновлення `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
        accent: '#10B981',
      },
      screens: {
        'xs': '480px',     
        'sm': '640px',     
        'md': '768px',     
        'lg': '1024px',    
        'xl': '1280px',    
        '2xl': '1536px',   
        'custom': '1440px',
        'huge': '1920px'   
      }
    },
  },
  plugins: [],
}
```

#### Крок 2: Практичне використання в коді
```html
<h2 class="text-[20px] text-blue-600 mb-4">Адаптивний grid-макет</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 custom:grid-cols-4">
    <div class="bg-secondary text-white">1</div>
    <div class="bg-accent text-white">2</div>
    <div class="bg-primary text-white">3</div>
    <div class="bg-secondary text-white">4</div>
</div>
```


## 6 Документація: Комбінування CSS та Tailwind — Структурований Підхід

Tailwind CSS чудово підходить для швидкої розробки, але бувають ситуації, коли необхідно комбінувати утиліти Tailwind із власним CSS. Щоб код залишався чистим і структурованим, слід дотримуватись кількох простих принципів.

#### 1.1 Визначення стилів для загальних елементів у CSS

Tailwind призначений для утилітарних класів, але якщо є повторювані стилі для великої кількості елементів, варто винести їх у окремі класи в CSS.

**Приклад: Оголошення загальних стилів у `style.css`**

```css
.btn {
  @apply px-4 py-2 rounded-lg font-semibold;
}

.btn-primary {
  @apply bg-blue-500 text-white hover:bg-blue-700;
}

.btn-secondary {
  @apply bg-gray-300 text-gray-800 hover:bg-gray-500;
}
```

### 1.2 Використання класів у HTML з мінімізацією повторів

**Приклад: Використання класів Tailwind у HTML**

```html
<h2 class="text-[24px] text-green-600 mb-4">Tailwind і власні CSS-класи</h2>
<button class="btn btn-primary">
  Основна кнопка
</button>
<button class="btn btn-secondary">
  Вторинна кнопка
</button>
```

#### Пояснення:
1. **`.btn`** — базовий стиль кнопки.
2. **`.btn-primary` та `.btn-secondary`** — розширені стилі для різних типів кнопок.

---


### 2.1 Винесення складних класів у CSS-файл

Tailwind дозволяє використовувати директиву `@apply`, щоб зменшити кількість класів у HTML.

**Приклад: Винесення класів у `style.css`**

```css
.card {
  @apply p-6 bg-white rounded-lg shadow-md border border-gray-200;
}

.card-title {
  @apply text-xl font-bold mb-4;
}

.card-body {
  @apply text-gray-600;
}
```

**Приклад HTML:**

```html
<div class="card">
  <h3 class="card-title">Заголовок картки</h3>
  <p class="card-body">Це тіло картки, яке містить опис або інший текст.</p>
</div>
```

### Переваги:
- Зменшення довжини HTML-коду.
- Легке повторне використання стилів.

---

### 3. Правильна структура проєкту

1. **index.html** — основний файл верстки.
2. **style.css** — файл із власними стилями та використанням `@apply`.
3. **tailwind.config.js** — налаштування кастомних змінних та кольорів.

### Структура папок:

```
/project-root
├── index.html
├── style.css
├── tailwind.config.js
└── dist/
    └── output.css
```

---

### 4. Приклад повної реалізації

**index.html:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind + CSS Example</title>
  <link rel="stylesheet" href="dist/output.css">
</head>
<body class="bg-gray-100 p-8">
  <h1 class="text-4xl font-bold text-center mb-8 text-blue-600">
    Tailwind з кастомними стилями
  </h1>

  <div class="card">
    <h3 class="card-title">Заголовок картки</h3>
    <p class="card-body">
      Це приклад, як комбінувати Tailwind з власними стилями.
    </p>
  </div>

  <div class="mt-8">
    <button class="btn btn-primary">Натисни мене</button>
    <button class="btn btn-secondary">Скасувати</button>
  </div>
</body>
</html>
```

**style.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
  @apply px-4 py-2 rounded-md text-white font-bold;
}

.btn-primary {
  @apply bg-green-500 hover:bg-green-700;
}

.btn-secondary {
  @apply bg-red-500 hover:bg-red-700;
}

.card {
  @apply bg-white p-6 rounded-lg shadow-lg;
}

.card-title {
  @apply text-2xl font-bold mb-4;
}

.card-body {
  @apply text-gray-700;
}
```

---

### 5. Поради та рекомендації

1. **Не використовуйте одночасно дуже багато класів у HTML:** Застосовуйте `@apply` для спрощення та повторного використання стилів.
2. **Додавайте кастомні кольори та breakpoints у `tailwind.config.js`, щоб зробити проект більш уніфікованим.**
3. **Використовуйте модульний підхід:** Організуйте стилі за компонентами або частинами інтерфейсу.

---

## Висновок

Tailwind CSS надає багато можливостей для швидкої верстки, але для зручного підтримування коду важливо дотримуватись структурованого підходу. Комбінуючи утилітарні класи з власними стилями через `@apply`, можна досягти чистоти та гнучкості в коді.

