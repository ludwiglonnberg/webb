function HelloWorld(){
	alert("Hello, JavaScript!")
}

function hamburgerActive(){
	let burger = document.querySelector(".hamburger");
	let menu = document.querySelector(".dropdown");
	menu.classList.toggle('active');
	burger.classList.toggle('active');
	
}

let slideIndex = 0;

function changeSlide(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n){
	showSlide(slideIndex = n)
}
function showSlide(n) {
	let slides = document.getElementsByClassName("hero");
	let dots = document.getElementsByClassName("dot");
	
	if (n >= slides.length) { 
		slideIndex = 0; 
	}

	if (n < 0) { 
		slideIndex = slides.length -1; 
	}
	
	//hides all slides and removes active state from dots
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		dots[i].classList.remove("active");
	}

	//Shows the slide of current index
	slides[slideIndex].style.display = "grid";
	dots[slideIndex].classList.add("active");
}

function inputFocus(x){
	x.style.backgroundColor ="white";
}

function inputBlur(x){
	x.style.backgroundColor ="transparent";
}
function testHover(x){
	x.style.backgroundColor ="white";
	x.style.padding="0px";
	x.style.borderRadius ="35px";
	x.style.border ="solid 1px";

}

function stopHover(x){
	x.style.background ="transparent";
	x.style.border ="none";
}