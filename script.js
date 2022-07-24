const currentTime = document.getElementById('currentTime'); // время
const currentDate = document.getElementById('currentDate'); // дата
displayDateTime(); // дата и время на экране
function displayDateTime() {
 const today = new Date();
 const options = {
 weekday: "long"
 };
 const date = today.toLocaleString("ru-Ru", options);
 const time = today.toLocaleTimeString("ru-RU");
 currentDate.textContent = "Сегодня " + date;
 currentTime.textContent = " на часах " + time;
 launchTime = setInterval(displayDateTime, 1000);
}

let phrasesRed = [
	{text: 'Имение Сикоры «Пино Нуар. Семейный резерв»', image:'images/0137.jpg'},
	{text: 'САТЕРА «Каберне Фран»', image:'images/0087.jpg'},
	{text: 'БЕЛЬБЕК «Каберне Фран»', image:'images/0152.jpg'},
	{text: 'Кубань-Вино «Высокий берег. Мерло»', image:'images/0112.jpg'},
	{text: 'Винодельня «Мысхако» «ЧЁРНОЕ ИЗ ЧЁРНОГО »', image:'images/0007.jpg'},
	{text: 'Усадьба Перовских «Сира. Лимитированная Серия»', image:'images/0105.jpg'},
	{text: 'Фанагория «Формула Q»', image:'images/0225.jpg'},
	{text: 'Южная Винная Компания «Мерло RESERVE Тамани»', image:'images/0073.jpg'},
	{text: 'Legato «Легато Мерло»', image:'images/0049.jpg'},
	{text: 'Олег Репин «Листва Сира Севастополь»', image:'images/0279.jpg'},
	{text: 'Усадьба Дивноморское «Сира»', image:'images/0293.jpg'},
	{text: 'КФХ Узунов Я.Ю. «Моно. Каберне Совиньон»', image:'images/0213.jpg'},
	{text: 'Винодельня Шато Пино «Дикари. Пино Нуар»', image:'images/0121.jpg'},
	{text: 'САТЕРА «Долинное»', image:'images/0089.jpg'},
	{text: 'Саук-Дере «ЛЕФКАДИЯ РЕЗЕРВ»', image:'images/0029.jpg'},
	{text: 'Винодельня «Мысхако» «ЧЕРНОЕ ИЗ КРАСНОГО»', image:'images/0006.jpg'},
	{text: 'Константин Дзитоев «Каберне Фран KD»', image:'images/0221.jpg'},
	{text: 'Собер Баш «Адау»', image:'images/0259.jpg'},
	{text: 'Поместье Голубицкое «РЕД БЛЕНД. НОБЛ СЕЛЕКШН»', image:'images/0180.jpg'},
	{text: 'Усадьба Маркотх «Кюве №1 Резерв»', image:'images/0241.jpg'},
	{text: 'ГУНЬКО ВВ «Мерло»', image:'images/0145.jpg'},
	{text: 'Uppa Winery «PAVEL SHVETS Неббиоло»', image:'images/0312.jpg'},
	{text: 'Саук-Дере «Ликурия Каберне Фран»', image:'images/0026.jpg'},
	{text: 'Тристория «Мерло Резерв»', image:'images/0267.jpg'},
	{text: 'САТЕРА «Каберне Фран»', image:'images/0088.jpg'},
	{text: 'САТЕРА «Саперави Хевен»', image:'images/0090.jpg'},
	{text: 'Усадьба Дивноморское «Ребо»', image:'images/0284.jpg'},
	{text: 'Шато де Талю «Каберне де Талю»', image:'images/0023.jpg'},
	{text: 'БЮРНЬЕ «БЮРНЬЕ. КРАСНОСТОП»', image:'images/0067.jpg'},
	{text: 'Солнечная Долина «Меганом»', image:'images/0127.jpg'},
	{text: 'Поместье Голубицкое «Пино Нуар»', image:'images/0176.jpg'},
	{text: 'Шумринка «Сурб Геворг»', image:'images/0240.jpg'},
	{text: 'Шато де Талю «Шато де Талю Шираз»', image:'images/0021.jpg'},
	{text: 'Массандра «Сира»', image:'images/0081.jpg'},
	{text: 'МАНТРА «Мерло»', image:'images/0019.jpg'},
	{text: 'КФХ Узунов Я.Ю. «Моно. Саперави»', image:'images/0212.jpg'},
	{text: 'Усадьба Дивноморское «Вест Хилл Бленд»', image:'images/0300.jpg'},
	{text: 'Мильстрим «МИЛЬСТРИМ ОРИДЖИНАЛ – СЕЛЛАР. РЕЗЕРВ БЛЕНД № 4»', image:'images/0288.jpg'},
	{text: 'Fervino «Мерло»', image:'images/0100.jpg'},
	{text: 'ALMA VALLEY «МЕРЛО РЕЗЕРВ»', image:'images/0163.jpg'},
	{text: 'Усадьба Саркел «Хазар»', image:'images/0245.jpg'},
	{text: 'Усадьба Мангуп «Сира и Каберне Совиньон»', image:'images/0265.jpg'},
	{text: 'Винодельня Шато Пино «Колдун Красный»', image:'images/0120.jpg'},
	{text: 'Имение Сикоры «Красностоп Золотовский на террасах»', image:'images/0136.jpg'},
	{text: 'Винодельня Ведерниковъ «Фантом 70/30»', image:'images/0301.jpg'},
	{text: 'Усадьба Перовских «Мерло. Лимитированная Серия»', image:'images/0102.jpg'},
	{text: 'Поместье Трензина «Рэд Бленд»', image:'images/0261.jpg'},
	{text: 'Фанагория «Крю Лермонт Special Reserve»', image:'images/0228.jpg'},
	{text: 'Винодельня «Мысхако» «Зинфандель квинтэссенция»', image:'images/0002.jpg'},
	{text: 'INKERMAN «Саперави Спешл Резерв»', image:'images/0173.jpg'},
	{text: 'Вилла Виктория «Шираз Семигорье Резерв»', image:'images/0299.jpg'},
	{text: 'Chateau Cotes de Saint Daniel «Ай-Даниль»', image:'images/0041.jpg'},
	{text: 'Собер Баш «Афа»', image:'images/0257.jpg'},
	{text: 'Кубань-Вино «КРАСНОСТОП - САПЕРАВИ»', image:'images/0111.jpg'},
	{text: 'Южная Винная Компания «Германасса Тамани»', image:'images/0072.jpg'},	
];
let phrasesWhite = [
	{text: 'Поместье Голубицкое «Шардоне»',  image: 'images/0183.jpg'},
	{text: 'Галицкий и Галицкий «Шардоне Красная Горка»',  image: 'images/0053.jpg'},
	{text: 'ALMA VALLEY «ШАРДОНЕ РЕЗЕРВ»',  image: 'images/0167.jpg'},
	{text: 'Семейная винодельня «Гусевъ» «Совиньон блан»',  image: 'images/0298.jpg'},
	{text: 'Имение Сикоры «Рислинг Сикоры»',  image: 'images/0138.jpg'},
	{text: 'YAIYLA «ЯЙЛА ОРАНЖ БЛАШ»',  image: 'images/0306.jpg'},
	{text: 'Имение Сикоры «Рислинг. Семейный резерв»',  image: 'images/0139.jpg'},
	{text: 'Имение Сикоры «Совиньон Блан. Семейный резерв»',  image: 'images/0140.jpg'},
	{text: 'Тристория «Шардоне»',  image: 'images/0271.jpg'},
	{text: 'Кара-Тау «ШАРДОНЕ КАРА-ТАУ»',  image: 'images/0236.jpg'},
	{text: 'Фанагория «Ркацители Винодел и Сомелье»',  image: 'images/0273.jpg'},
	{text: 'Кубань-Вино «ШАРДОНЕ»',  image: 'images/0114.jpg'},
	{text: 'БЕЛЬБЕК «Совиньон Блан»',  image: 'images/0160.jpg'},
	{text: 'Поместье Голубицкое «ШАРДОНЕ. НОБЛ СЕЛЕКШН. БАРРЕЛ ТАЧ»',  image: 'images/0182.jpg'},
	{text: 'Дербентская винодельческая компания «Di Caspico Совиньон»',  image: 'images/0251.jpg'},
	{text: 'Кара-Тау «РИСЛИНГ, ВИОНЬЕ КАРА-ТАУ»',  image: 'images/0237.jpg'},
	{text: 'Шато де Талю «Шардоне де Талю»',  image: 'images/0025.jpg'},
	{text: 'Вина Арпачина «Кумшацкий белый»',  image: 'images/0062.jpg'},
	{text: 'КФХ Узунов Я.Ю. «Рислинг. Алиготе. Шардоне»',  image: 'images/0215.jpg'},
	{text: 'Винодельня «Мысхако» «ШАРДОНЕ РЕНЕССАНС»',  image: 'images/0008.jpg'},
	{text: 'Олег Репин «Рислинг Севастополь»',  image: 'images/0280.jpg'},
	{text: 'Гай Кодзор «Вионье»',  image: 'images/0272.jpg'},
	{text: 'Два Сердца «Вионье»',  image: 'images/0269.jpg'},
	{text: 'Legato «Легато Шардоне»',  image: 'images/0051.jpg'},
	{text: 'Рем Акчурин «Шардоне Чёрная Ривер»',  image: 'images/0270.jpg'},
	{text: 'WINEMAFIA «Tamara «Ркацители»',  image: 'images/0016.jpg'},
	{text: 'Саук-Дере «Лефкадия Шардоне Лимитед»',  image: 'images/0032.jpg'},
	{text: 'Усадьба Дивноморское «Рислинг»',  image: 'images/0285.jpg'},
	{text: 'BOGOVICH WINE & VINEYARD «МУСКАТ ОРАНЖ»',  image: 'images/0144.jpg'},
	{text: 'КФХ Узунов Я.Ю. «Совиньон блан»',  image: 'images/0214.jpg'},
	{text: 'БЕЛЬБЕК «Ркацители Баррик»',  image: 'images/0159.jpg'},
	];
	let phrasesSpark = [
	{text: 'Абрау-Дюрсо «Victor Dravigny» Розовое Брют',  image: 'images/0209.jpg'},
	{text: 'Золотая Балка «Кюве де Витмер» брют белое',  image: 'images/0198.jpg'},
	{text: 'Кубань-Вино «АРИСТОВ. КЮВЕ АЛЕКСАНДР» экстра брют розовое',  image: 'images/0118.jpg'},
	{text: 'Золотая Балка «Пино Нуар БАЛАКЛАВА брют розовое»',  image: 'images/0200.jpg'},
	{text: 'Абрау-Дюрсо «Victor Dravigny брют»',  image: 'images/0210.jpg'},
	{text: 'Абрау-Дюрсо «Brut D or Blanc de Blancs брют»',  image: 'images/0208.jpg'},
	{text: 'Саук-Дере «МАГНАТУМ» экстра брют розовое»',  image: 'images/0034.jpg'},
	{text: 'САТЕРА «ЕССЕ» розовое брют»',  image: 'images/0096.jpg'},
	{text: 'Абрау-Дюрсо «Империал» брют розовое»',  image: 'images/0211.jpg'},
	{text: 'Поместье Голубицкое «ТЕТ ДЕ ШЕВАЛЬ»',  image: 'images/0185.jpg'},
	{text: 'Золотая Балка «Кюве де Витмер» брют розовое»',  image: 'images/0199.jpg'},
	{text: 'Новый Свет «Каберне брют розовое»',  image: 'images/0195.jpg'},
	{text: 'Кок т э бэль «Шардоне Кюве №1 блан де блан»',  image: 'images/0281.jpg'},
	{text: 'Фанагория «Blanc de Noirs»',  image: 'images/0232.jpg'},
	
];
function getRandomElement(arr) {
	let randIndex = Math.floor(Math.random() * arr.length);
	return arr[randIndex];
}
const buttonRed = document.getElementById('buttonRed');
const buttonWhite = document.getElementById('buttonWhite');
const buttonSpark = document.getElementById('buttonSpark');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
let timerId = 0;

buttonRed.addEventListener('click', onButtonRedClick);
buttonWhite.addEventListener('click', onButtonWhiteClick);
buttonSpark.addEventListener('click', onButtonSparkClick);

function randElemRed() {
	let randomElement = getRandomElement(phrasesRed);
	phrase.textContent = randomElement.text;
	image.src = randomElement.image;
   };
function randElemWhite() {
	   let randomElement = getRandomElement(phrasesWhite);
	   phrase.textContent = randomElement.text;
	   image.src = randomElement.image;
	  };
function randElemSpark() {
	   let randomElement = getRandomElement(phrasesSpark);
	   phrase.textContent = randomElement.text;
	   image.src = randomElement.image;
	  };

function onButtonRedClick() {
	clearTimeout(timerId);
	timerId = setTimeout(randElemRed, 1000);
   };
function onButtonWhiteClick() {
	clearTimeout(timerId);
	timerId = setTimeout(randElemWhite, 1000);
   };
function onButtonSparkClick() {
	clearTimeout(timerId);
	timerId = setTimeout(randElemSpark, 1000);
   };
   
//    function onButton2Click() {
// 	clearTimeout(timerId);
// 	button.disabled = false;
// 	button.textContent = 'Ещё попытка';
//    };
   


