if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/* Фильтр на мобильных */

const sidebarToggleButton = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


// клик по кнопке для скрытия показа фильтра и изменения иконки
sidebarToggleButton.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');

};

/* Показать еще три карточки */

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');


// клик по кнопке показывает три скрытых
btnShowMoreCards.addEventListener('click', () => {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    });
});

/* Показать/скрыть контент внутри виджетов */

const widgets = document.querySelectorAll('.widget');


// находим все виджеты на странице
widgets.forEach((widget) => {
    // слушаем клик внутри виджета
    widget.addEventListener('click', (e) => {
        // если клик по заголловку, тода скрываем/показываем тело виджета
        if(e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    });
});

/* Location - окно любое*/

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');


/* Клик по кнопке любая и отключение других чекбоксов */
checkBoxAny.addEventListener('change', () => {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach((item) => {
            item.checked = false;
        });
    } 
});

/* Отключаем кнопку Любая при клике на другие  */
topLocationCheckboxes.forEach((item) => {
    item.addEventListener('change', () => {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    });
});

/* Показать еще 3 доп опции с чекбоксами в фильтре */

const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = (e) => {
    e.preventDefault();
    //Если блоки были скрыты, значит показываем
    if(showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach((item) => {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = "Скрыть дополнительные опции";
        showMoreOptions.dataset.options = 'visible';
    }   
    // Если блоки были видны, Значи тскрываем
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach((item) => {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = "Показать ещё";
    }
    
}