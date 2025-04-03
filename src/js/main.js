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

document.addEventListener("DOMContentLoaded", function () {
	const params = new URLSearchParams(window.location.search);
	const projectName = params.get("nom");

	if (!projectName) {
		document.getElementById("project-title").innerText =
			"Projet non trouvé";
		return;
	}

	const projects = {
		minimalist: {
			title: "Minimalist",
			images: ["minimalist-1.jpg", "minimalist-2.jpg"],
		},
		formicidae: {
			title: "Formicidae",
			images: ["formicidae-1.jpg", "formicidae-2.jpg", "formicidae-3.jpg", "formicidae-4.jpg", "formicidae-5.jpg"],
		},
		loft: {
			title: "The Loft",
			images: ["loft-7.jpg", "loft-8.jpg", "loft-9.jpg", "loft-3.jpg", "loft-4.jpg", "loft-5.jpg", "loft-6.jpg"],
		},
		usfood: {
			title: "USFOOD",
			images: ["usfood-6.jpg", "usfood-7.jpg", "usfood-8.jpg", "usfood-9.jpg"],
		},
		appart: {
			title: "Appart'Agence",
			images: ["appart-1.jpg", "appart-2.jpg", "appart-3.jpg", "appart-4.jpg", "appart-5.jpg", "appart-6.jpg"],
		},
	};

	function generateProjetSlides(project) {
		let diapoHtml = "";
		project.images.forEach((img) => {
			diapoHtml += `<img src="./public/img/projects/${projectName}/${img}" alt="${project.title}">`;
		});
		return diapoHtml;
	}

	generateProjetSlides(projects[projectName]);

	const project = projects[projectName];
	if (!project) {
		document.getElementById("project-title").innerText =
			"Projet non trouvé";
		return;
	}

	document.getElementById("project-title").innerText = project.title;
	let diapoHtml = "";
	project.images.forEach((img) => {
		diapoHtml += `<img src="./public/img/projects/${projectName}/${img}" alt="${project.title}">`;
	});
	document.getElementById("diapo").innerHTML += diapoHtml;
});

let currentSlide = 0;

var slides = document.querySelectorAll("#diapo img");
var totalSlides = slides.length;
setTimeout(() => {
	slides = document.querySelectorAll("#diapo img");
	totalSlides = slides.length;
}, 1000);

function showSlide(index) {
	currentIndex = index;
	if (!slides[index]) return;
	const projectWidth = slides[0].offsetWidth;
	const offset = -index * projectWidth;
	slides.forEach((project, i) => {
		project.style.transform = `translateX(${offset}px)`;
		project.style.transition = "transform 0.5s ease-in-out";
	});
}

function nextProjectSlide() {
	currentSlide = (currentSlide + 1) % totalSlides;
	showSlide(currentSlide);
}

function prevProjectSlide() {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	showSlide(currentSlide);
}

showSlide(currentSlide);
