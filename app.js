// Скролл
window.addEventListener("load", function () {
    // Проверяем положение горизонтальной прокрутки
    var scrollX = window.pageXOffset || document.documentElement.scrollLeft;

    // Если положение прокрутки не равно 0, прокручиваем обратно к началу
    if (scrollX !== 0) {
        window.scrollTo({ top: this.window.scrollY, left: 0, behavior: "smooth" });
    }
});

// Кнопка "раскрыть меню"
let uncoverbutton = document.querySelector("#openMenu");
let lines = [
    document.querySelector("#line1"),
    document.querySelector("#line2"),
    document.querySelector("#line3")
];

uncoverbutton.addEventListener("click", function () {
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.transition = "all 1s cubic-bezier(0.58, 0.06, 0.7, 0.83)";
    }
    if (lines[1].style.background == "transparent") {
        lines[1].style.background = "white";
        lines[0].style.transform = "rotate(0deg)";
        lines[2].style.transform = "rotate(0deg)";
        lines[2].style.marginTop = "4px";
    } else {
        lines[1].style.background = "transparent";
        lines[0].style.transform = "rotate(45deg)";
        lines[2].style.transform = "rotate(-45deg)";
        lines[2].style.marginTop = "-9px";
    }

})

// Изменение текста в адаптив-версии
let editableTxts = [document.querySelector("#editableTxt1"), document.querySelector("#editableTxt2")]
if (window.innerWidth === 320) {
    editableTxts[0].innerHTML = `
    Оценивать торговые инструменты
    с помощью технического анализа
    `
    editableTxts[1].innerHTML = `
    Соблюдать <br>
    баланс <br>
    собственных и <br> 
    заёмных <br>
    средств <br>
    `
}

// Скролл слайдов
let arrow_left = document.querySelector(".arrow-left-box");
let arrow_right = document.querySelector(".arrow-right-box");
let slides = document.querySelector(".slides");
let slidesX;

arrow_right.addEventListener("click", function () {
    // Если кнопка ещё не нажималась
    if (slidesX === undefined) {
        slidesX = 20;
        slides.style.transition =
            "margin-left 1s cubic-bezier(0.58, 0.06, 0.7, 0.83)";
        slides.style.marginLeft = `${slidesX}px`;
    } else if (slidesX === 20) {
        // Если кнопка уже нажималась, то перематываем на -1150px
        slidesX = -1150;
        slides.style.transition =
            "margin-left 1s cubic-bezier(0.58, 0.06, 0.7, 0.83)";
        slides.style.marginLeft = `${slidesX}px`;
    } else if (slidesX === 363) {
        // Если кнопка left нажималасьь при 20 перематываем на 20 с 363
        slidesX = 20;
        slides.style.transition =
            "margin-left 1s cubic-bezier(0.58, 0.06, 0.7, 0.83)";
        slides.style.marginLeft = `${slidesX}px`;
    }
});

arrow_left.addEventListener("click", function () {
    if (slidesX === -1150) {
        slidesX = 20;
        slides.style.transition =
            "margin-left 1s cubic-bezier(0.58, 0.06, 0.7, 0.83)";
        slides.style.marginLeft = `${slidesX}px`;
    } else if (slidesX === 20) {
        slidesX = 363;
        slides.style.transition =
            "margin-left 1s cubic-bezier(0.58, 0.06, 0.7, 0.83)";
        slides.style.marginLeft = `${slidesX}px`;
    }
});

// Всплывающее меню у выбора номера
let expandMenu = document.querySelector("#expand-menu");
let menu = document.querySelector("#floatmenu");
let menuButton = document.querySelector("#numberbutton");
let number = document.querySelector("#num");
let countryCodes = [
    document.querySelector("#UA"),
    document.querySelector("#BY"),
    document.querySelector("#AM"),
    document.querySelector("#MD"),
    document.querySelector("#LV"),
    document.querySelector("#GE"),
    document.querySelector("#AZ"),
    document.querySelector("#KZ-RU"),
];
// advantages scroll/adaptive


// switching nums
menuButton.addEventListener("click", function () {
    if (menu.style.display == "block") {
        menu.style.display = "none";
        expandMenu.style.transition =
            "all 0.7s cubic-bezier(0.08, -0.28, 0.54, 0.97)";
        expandMenu.style.transform = `rotate(${0}deg)`;
    } else {
        menu.style.display = "block";
        expandMenu.style.transition =
            "all 0.7s cubic-bezier(0.08, -0.28, 0.54, 0.97)";
        expandMenu.style.transform = `rotate(${180}deg)`;
    }
});

let numbers = ["+380", "+375", "+374", "+373", "+371", "+995", "+994", "+7"];
for (let i = 0; i < numbers.length; i++) {
    countryCodes[i].addEventListener("click", function () {
        number.innerHTML = `${numbers[i]}`;
    });
}
