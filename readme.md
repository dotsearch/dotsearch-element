[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)
<!-- Documented by AI badge -->
![Static Badge](https://img.shields.io/badge/Documented_by-AI-blue)

# @dotsearch/element

این پکیج، مجموعه‌ای از المنت‌های جذاب و آماده برای استفاده در پروژه‌های وب است 😄✨. با استفاده از فریمورک استنسیل، این المنت‌ها تولید شده‌اند 🎨🛠️. شما با افزودن این المنت‌ها به پروژه خود، با کد کم و سریع، می‌توانید به راحتی از دات سرچ استفاده کنید 🚀💫.

## نصب

برای نصب این پکیج، می‌توانید از دستور زیر استفاده کنید:

```bash
npm i @dotsearch/element
```

یا اگر از یارن استفاده می‌کنید:

```bash
yarn add @dotsearch/element
```

یا اگر با مرورگر هستید و می‌خواهید از CDN استفاده کنید:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@dotsearch/element"></script>
```

## استفاده

برای استفاده از المنت‌های این پکیج، می‌توانید از کد زیر استفاده کنید:

```ts
import '@dotsearch/element';
```

برای دریافت توکن از دات سرچ، می‌توانید به [این صفحه](https://panel.dotsearch.ir/) مراجعه کنید.

## کامپوننت ها

در این بخش، می‌توانید کامپوننت‌های موجود در این پکیج را مشاهده کنید.

### کامپوننت جستجو

این کامپوننت برای جستجو در دات سرچ استفاده می‌شود. شما می‌توانید با استفاده از کد زیر، این کامپوننت را به صفحه خود اضافه کنید:

```html
<dotsearch-autocomplete></dotsearch-autocomplete>
```

#### پارامترها

این کامپوننت دارای چندین پارامتر است که می‌توانید از آن‌ها برای تنظیمات مختلف استفاده کنید. در زیر، این پارامترها را مشاهده می‌کنید:
| نام پارامتر | نوع پارامتر | توضیحات |
| --- | --- | --- |
| token  | string | توکن دات سرچ شما |
| placeholder  | string | متن پیش‌فرض جستجو |
| fuzziness | number | استفاده از فازینس برای یافتن دیتا با غلط املایی که شما فقط می توانید 0 یا 1 یا 2 وارد کنید |


#### اسلات ها

شما می تونید از اسلات های زیر برای تغییر ظاهر کامپوننت استفاده کنید:
اگر می خواهید نوع دیتای خاص خود رو شخصی سازی کنید به این شکل می توانید از اسلات استفاده کنید:

```html
<template slot="dotsearch-DATA_TYPE"> </template>
```

شما یک اسلات تمپلیت به نام `dotsearch-DATA_TYPE` می سازید. (نوع دیتا تایپ رو توی ثبت اپ شما مشخص کرده اید)
برای چاپ دیتا شما باید از این شکل استفاده کنید:
شروع رو با #DOTSEARCH و بعد نوع دیتا رو می نویسید و بعد متغیری که می خواهید چاپ بشه.
به طور مثال :

```html
<template slot="dotsearch-product">
  <a href="#DOTSEARCH-PRODUCT-LINK" target="_blank" style="display: flex; flex-wrap: nowrap; align-items: center; gap: 10px">
    <img src="#DOTSEARCH-PRODUCT-THUMBNAIL" width="32px" height="32px" />
    <span style="font-size: 14px">#DOTSEARCH-PRODUCT-NAME</span>
  </a>
</template>
```
به این موارد توجه کنید :
1. از تگ template استفاده کنید
2. نام گذاری اسلات ها باید به این شکل باشه : dotsearch-DATA_TYPE
3. برای چاپ یک دیتا از این شکل استفاده کنید : #DOTSEARCH-DATA_TYPE-KEY
4. حتما برای چاپ متغیر از حروف بزرگ استفاده کنید