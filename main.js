// -----------------------SLIDER--------------------------

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

// --------------------------SHOW HIDE DIV -----------------------------//

document.querySelector(".change").addEventListener("click", function () {
	let divs = document.querySelectorAll(".showDivWrapper");
	divs.forEach((div) => div.classList.toggle("active"));
});
// -------------------------------------COUNTER-----------------------------

let counter = 0;
document.getElementById("increment").addEventListener("click", function () {
	counter++;
	document  .getElementById("counterValue").textContent = counter;
});

document.getElementById("decrement").addEventListener("click", function () {
	counter--;
	document.getElementById("counterValue").textContent = counter;
});

// -----------------------------------DROP DOWN--------------------------
    const dropDownTrigger = document.querySelector('.dropDown');
    const dropDownItems = document.querySelectorAll('.dropdown-item');


  dropDownTrigger.addEventListener("click", () => {
	dropDownItems.forEach(item => {
		item.classList.toggle("show")
	})
  })
  
  
