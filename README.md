
# Test work

Тестовое приложение на Next JS
https://blogs-test-work.vercel.app/

Есть 3 страницы: Главное, Блоги и Пользователи.

Для получение начального списка блогов и пользователей использовал SSR запросы (App Router). Для пагинации и хранение остального списка - Zustand.

Для каждого блога и пользователя настроены свои метаданные получаемые из публичного API JSON Placeholder. Все страницы оптимизированы, обернуты в loading.tsx.

![SCREENSHOT](https://i.ibb.co/qF1zjBcH/2025-03-23-12-39-51.png)


В качестве архитектуры выбрал FSD, где есть 2 сущности User и Blog.

![SCREENSHOT](https://i.ibb.co/S42g5pJ7/2025-03-23-12-44-08.png)


Для блогов также реализован поиск, так как JSON Placeholder не предоставляет поиск построчно, просто на уровне Page.tsx реализовал получение всего списка и дальнейшей его фильтрации через метод filter.

Есть поддержка темной/светлой темы.

![SCREENSHOT](https://i.ibb.co/ZzgxyqMB/2025-03-23-12-47-11.png)
![SCREENSHOT](https://i.ibb.co/YFwLSf03/2025-03-23-12-47-20.png)

## Автор

- [@aman](https://www.github.com/aman1998)


## Installation

Инструкция
```bash
  npm install
  npm run dev
```

## Стек
**Client:** Next JS, TailwindCSS, Zustand

**Server:** Next JS, JSON Placeholder

