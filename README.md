# Сборка

Для сборки проекта нужно поправить package.json -> "scripts": ->  "deploy"

Например:

```sh
"deploy": "make build"
```

## Автособранные стенды

доступны по адресу https://shri-```{НАЗВАНИЕ ПРОЕКТА НА BB}```-{{```ИМЯ ВЕТКИ```}}.common-ext.yandex-team.ru

***Например:***

https://shri-helpboard-master.common-ext.yandex-team.ru

## Установка webpack

0. `npm i -g webpack webpack-cli`

1. `npm i`

## Запуск

Режим сервера - `npm run startwp`

Режим разработки - `npm run dev`

Режим продакшена - `npm run build`