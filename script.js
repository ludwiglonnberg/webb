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
window.onload = () => {

};

//Logo hover
function testHover(x){
	x.style.transform = "scale(110%)";

}
function stopHover(x){
	x.style.transform = "translate(0, 0)";
}

window.onload = () => { 
	let navLinks = document.querySelectorAll(".nav a");
	let products = document.querySelectorAll(".products");
	let items = document.querySelectorAll(".item img");
	let input = document.querySelectorAll("input")
	
	//changes apperance of navigation links on mouseover
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("mouseover", function() {
            this.style.color = "red";
        });

        navLinks[i].addEventListener("mouseout", function() {
            this.style.color = ""; 
        });
    }
	//changes apperance of products on homepage on mouseover
	for (let i = 0; i < products.length; i++) {
        products[i].addEventListener("mouseover", function() {
            this.style.transform ="translateY(-10px)";
			
        });

        products[i].addEventListener("mouseout", function() {
           this.style.transform = "translate(0, 0)";
		   
        });
		
    }

	//changes apperance of all items on mouseover
	for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("mouseover", function() {
            this.style.transform ="translateY(-10px)";
			
			
        });

        items[i].addEventListener("mouseout", function() {
           this.style.transform = "translate(0, 0)";
		   
        });
		
    }
	//changes apperance of input fields on focus
	for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("focus", function() {
            this.style.backgroundColor = "white";
        });

        input[i].addEventListener("blur", function() {
            this.style.backgroundColor = ""; 
        });
    }
};
      

      