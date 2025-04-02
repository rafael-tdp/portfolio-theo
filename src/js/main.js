function toggleMenu() {
	const menu = document.getElementById("menu");
	const burger = document.querySelector(".burger");
	menu.classList.toggle("right-0");
	burger.classList.toggle("open");
}

// Gestion du slideshow
const images = document.querySelectorAll(".slideshow img");
let index = 0;

function changeImage() {
	if (!images[index]) return;
	images[index].classList.remove("opacity-100");
	images[index].classList.add("opacity-0");
	index = (index + 1) % images.length;
	images[index].classList.remove("opacity-0");
	images[index].classList.add("opacity-100");
}

window.addEventListener("scroll", () => {
	const logo = document.querySelector(".logo");
	const scrollThreshold = 200;
	const opacityValue = Math.max(0, 1 - window.scrollY / scrollThreshold);

	logo.style.opacity = opacityValue;
});

setInterval(changeImage, 5000);

let currentIndex = 0;
const slider = document.getElementById("slider");
const projects = document.querySelectorAll(".project");
const dots = document.querySelectorAll(".dot");

function changeSlide(index) {
	currentIndex = index;
	if (!projects[index]) return;
	const projectWidth = projects[0].offsetWidth + 16;
	const offset = -index * projectWidth;

	slider.style.transform = `translateX(${offset}px)`;

	dots.forEach((dot, i) => {
		dot.classList.toggle("bg-gray-900", i === index);
		dot.classList.toggle("bg-gray-400", i !== index);
	});
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % projects.length;
	changeSlide(currentIndex);
}

function prevSlide() {
	currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	changeSlide(currentIndex);
}

// Initialisation
changeSlide(0);

window.addEventListener("scroll", () => {
	const slideshowContainer = document.querySelector(".slideshow-container");
	if (!slideshowContainer) return;
	const scrollThreshold =
		slideshowContainer.offsetTop + slideshowContainer.offsetHeight - 100;
	const burgerLines = document.querySelectorAll(".burger div");
	console.log(scrollThreshold);

	if (window.scrollY > scrollThreshold) {
		burgerLines.forEach((line) => {
			line.classList.remove("bg-white");
			line.classList.add("bg-black");
		});
	} else {
		burgerLines.forEach((line) => {
			line.classList.remove("bg-black");
			line.classList.add("bg-white");
		});
	}
});
