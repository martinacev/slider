const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slider = document.querySelector(".slider");
let index = 0;

prevButton.addEventListener("click", () => {
	if (index > 0) {
		index--;
		slider.style.transform = `translateX(${-index * 100}%)`;
	}
});

nextButton.addEventListener("click", () => {
	if (index < slider.children.length - 1) {
		index++;
		slider.style.transform = `translateX(${-index * 100}%)`;
	}
});
