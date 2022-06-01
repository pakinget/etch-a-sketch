const body = document.querySelector("body");
const pad = document.querySelector(".pad");
const colour = document.querySelector(".colour");
const modes = document.querySelectorAll(".modeButton");
let mode;
let mouseDown = false;

body.addEventListener("mousedown", () => {
	mouseDown = true;
});

body.addEventListener("mouseup", () => {
	mouseDown = false;
});

function generatePad(num = 16) {
	for (let i = 0; i < num; i++) {
		let row = document.createElement("div");
		row.classList.add("row");
		for (let i = 0; i < num; i++) {
			let square = document.createElement("div");
			row.appendChild(square);

			square.addEventListener("mouseover", (e) => {
				if (!mouseDown) return;
				else if (mode == "normal")
					e.target.style.backgroundColor = colour.value;
				else if (mode == "rainbow")
					e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
				else if (mode == "shade") {
					if (e.target.style.backgroundColor == "") {
						let hex = colour.value;
						let r = parseInt(hex.slice(1, 3), 16);
						let g = parseInt(hex.slice(3, 5), 16);
						let b = parseInt(hex.slice(5, 7), 16);

						e.target.style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + 0.1 + ")";
					}
					else {
						let currentArr = e.target.style.backgroundColor.split(",");;
						let current = currentArr[3].slice(1, 4);
						let added = ` ${Number(current) + 0.1})`;
						currentArr[3] = added;
						let newColour = currentArr.join(",");
						e.target.style.backgroundColor = newColour;
					}
				}
			});
		}
		pad.appendChild(row);
	}
}

modes.forEach((button) => {
	button.addEventListener("click", () => {
		changeMode(button.textContent);
	});
});

function changeMode(newMode = "normal") {
	modes.forEach((button) => {
		if (button.textContent == newMode) {
			button.classList.add("selected");
			mode = button.textContent;
		} else button.classList.remove("selected");
	});
}

generatePad();
changeMode();

const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", () => {
	while (pad.firstElementChild) {
		pad.firstElementChild.remove();
	}
	let size = prompt("What size the new grid should be?");
	if (isNaN(size) || size > 100 || size < 2) size = 16;
	generatePad(size);
});