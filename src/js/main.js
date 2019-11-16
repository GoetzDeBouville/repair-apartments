var button = document.querySelector('#button'); //document - поиск элемента в документе, querySelector - функция поиска конкретного элемента, в данном случае идентификатора #button
var modal = document.querySelector('#modal'); //поиск идентификатора modal 
var close = document.querySelector('#close'); //поиск идентификатора close

button.addEventListener('click', function () {//добавление отслеживающего события (click) и добавление выполняемой функции по клику
	// пример вывода всех классов console.log(modal.classList); //обращаемся к элементу modal для отображения всего списка классов родительского класса modal
	modal.classList.add('modal_active'); //добавляем класс
});

close.addEventListener('click', function(){
	modal.classList.remove('modal_active') //выполнения функции закрытия окна
});