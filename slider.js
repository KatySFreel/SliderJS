function Slider() {
	this.showPrevBtn = null; //document.querySelector('.btnPrev'), //поиск элемента по классу Назад
	this.showNextBtn = null;//document.querySelector('.btnNext'),//поиск элемента по классу Вперёд
	this.slideImg = null; //document.querySelector('.slideImg'),//поиск элемента по классу Картинка
	this.imgesArray = []; // создаем массив пустой
	this.currentImagesIdnex = 0; // переменная со значением 0
	
	this.start = function(elId){ // функция внутри объекта, которая запускает дейстаия слайдера
		var that = this; // переменной that присваеваем значение this - ссылка на элемент, в котором испульзуется переменная this
		var elSelector = '#' + elId;
		var el = document.querySelector(elSelector);

		this.showPrevBtn = el.querySelector('.btnPrev');
		this.showNextBtn = el.querySelector('.btnNext');
		this.slideImg = el.querySelector('.slideImg');

		this.imgesArray.push('https://uprostim.com/wp-content/uploads/2021/05/image005-8.jpg');//Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
		this.imgesArray.push('https://uprostim.com/wp-content/uploads/2021/05/image032-6.jpg');// добавляем новый элемент к массиву imgesArray
		this.imgesArray.push('https://kartinkin.net/uploads/posts/2022-02/1645226740_4-kartinkin-net-p-kartinki-kot-v-ochkakh-5.jpg');
		this.imgesArray.push('https://uprostim.com/wp-content/uploads/2021/05/image034-5.jpg');
		
		this.slideImg.src = this.imgesArray[this.currentImagesIdnex]; //присваеваем переменной и её src значение массива с зображениеями с нулевого элемента. (см. 6)
		this.showPrevBtn.disabled = true; //блокируем состояние кнопки назад при инициализации слайдера
		
		//subscribe to events подписываеися на состояние
		this.showNextBtn.addEventListener('click', function(e){ // создаем функцию листенера, который при клике на кнопку запускает функцию КликДальше
			that.onShowNextBtnClick(e);
		});
		this.showPrevBtn.addEventListener('click', function(e){ // создаем функцию листенера, который при клике на кнопку запускает функцию КликНазад
			that.onShowPrevBtnClick(e);
		});
	};
	this.onShowPrevBtnClick = function(event) { // создаем функцию переключения Назад		
		this.currentImagesIdnex--; // уменьшаем значение элемента в цикле
		this.slideImg.src = this.imgesArray[this.currentImagesIdnex];	// присваеваем картинке в html src текущей картинке в массиве
		this.showNextBtn.disabled = false; // разблокировываем кнопку Вперёд
	
		//disabled showPrevBtn
		if (this.currentImagesIdnex === 0) { // если значение переменной в массиве равно 0, то кнопка блокируется
			this.showPrevBtn.disabled = true; // блокируем кнопку Назад
		}
	};
	this.onShowNextBtnClick = function(event) { // создаем функцию переключения Вперёд
		this.currentImagesIdnex++; // увеличиваем значение элемента в цикле
		this.slideImg.src = this.imgesArray[this.currentImagesIdnex]; 	// присваеваем картинке в html src текущей картинке в массиве
		this.showPrevBtn.disabled = false; // разблокировываем кнопку Назад
		
		//disabled showNextBtn
		if (this.currentImagesIdnex === (this.imgesArray.length - 1)) { // если элемент массива больше, чем длинна массива
			this.showNextBtn.disabled = true; //блокируем кнопку Вперёд
		}
	}	
}