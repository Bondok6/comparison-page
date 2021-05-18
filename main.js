const slider = document.querySelector('.inner_slider');
const sliderImages = document.querySelectorAll('.inner_slider img');
const month = document.querySelector('.month');

const mainSlider = document.querySelector('.main_slider');

const leftSlider = document.querySelector('.slider');
const leftSliderImgs = document.querySelectorAll('.slider img');

//Buttons
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');

const backBtn = document.querySelector('.arrow_back');
const forwardBtn = document.querySelector('.arrow_forward');

const upBtn = document.querySelector('.arrow_up');
const downBtn = document.querySelector('.arrow_down');

let counter = 1;
const size = 350;

let mainCounter = 1;
const mainSize = 1000;

let leftCounter = 1;
const leftSize = 80;

slider.style.transform = 'translateX(' + -size * counter + 'px)';
mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
leftSlider.style.transform = 'translatey(' + -leftSize * leftCounter + 'px)';

nextBtn.addEventListener('click', () => {
	if (counter == sliderImages.length - 1) return;
	slider.style.transition = 'transform 0.4s ease-in-out';
	counter++;
	slider.style.transform = 'translateX(' + -size * counter + 'px)';
	month.innerHTML = `month ${counter + 1}`;
});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) return;
	slider.style.transition = 'transform 0.4s ease-in-out';
	counter--;
	slider.style.transform = 'translateX(' + -size * counter + 'px)';
	month.innerHTML = `month ${counter + 1}`;
});

forwardBtn.addEventListener('click', () => {
	console.log('clicked');
	if (mainCounter == 3) return;
	mainSlider.style.transition = 'transform 0.4s ease-in-out';
	mainCounter++;
	mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
});
backBtn.addEventListener('click', () => {
	console.log('clicked');
	if (mainCounter <= 0) return;
	mainSlider.style.transition = 'transform 0.4s ease-in-out';
	mainCounter--;
	mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
});

downBtn.addEventListener('click', () => {
	if (leftCounter == leftSliderImgs.length - 5) return;
	leftSlider.style.transition = 'transform 0.4s ease-in-out';
	leftCounter++;
	leftSlider.style.transform = 'translateY(' + -leftSize * leftCounter + 'px)';
});
upBtn.addEventListener('click', () => {
	if (leftCounter <= 0) return;
	leftSlider.style.transition = 'transform 0.4s ease-in-out';
	leftCounter--;
	leftSlider.style.transform = 'translateY(' + -leftSize * leftCounter + 'px)';
});
