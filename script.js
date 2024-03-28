function HelloWorld(){
	alert("Hello, JavaScript!")
}

//hamburger/dropdown
function hamburgerActive(){
	let burger = document.querySelector(".hamburger");
	let menu = document.querySelector(".dropdown");
	menu.classList.toggle('active');
	burger.classList.toggle('active');
	
}

// slideshow
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

// input fields
function inputFocus(x){
	x.style.backgroundColor ="white";
}
function inputBlur(x){
	x.style.backgroundColor ="transparent";
}

//Logo hover
function testHover(x){
	x.style.transform = "scale(110%)"
	x.style

}
function stopHover(x){
	x.style.transform = "translate(0, 0)"
}

document.addEventListener("DOMContentLoaded", function() {
	const products = document.querySelectorAll(".products");
	
      
	products.forEach(product => {
		product.addEventListener("mousemove", function(event) {
			moveObject(event, product);
		});
	
		product.addEventListener("mouseleave", function() {
			resetPosition(product);
		});
	});
});
      
function moveObject(event, product) {
	product.style.transform ="translateY(-10px)";
}
      
function resetPosition(product) {
	product.style.transform = "translate(0, 0)";
}

      