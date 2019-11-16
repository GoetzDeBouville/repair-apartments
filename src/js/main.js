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

// setTimeout(function () {
// 	modal.classList.remove('modal_active')
// }, 1);



////////////////////////////////////////////////////////////////////////////
// $(document) //обращение ко всему пакету

// $(document).ready(function(){ // вызов элемента по id только после полной загрузки страницы
// 	$('#id')
// });

// $(function (){ // полностью эквивалентно предыдущей записи
// 	$('#id')
// });

// $(document).ready(function () { // вызов элемента по id только после полной загрузки страницы
// 	$('.navbar__contacts').css('border','solid 3px red');
//  });

// $(document).ready(function(){
// 	// //$('.navbar__phone').click(function(){
// 	// // (this).toggleClass('blue')
// 	// // })
// 	// $('.navbar__phone').mouseenter(function(){
// 	// 	$(this).toggleClass('red')
// 	// })
// 	// $('.navbar__phone').mouseleave(function (){
// 	// 	$(this).toggleClass('red')
// 	// })


// });