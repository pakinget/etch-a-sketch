const pad = document.querySelector(".pad");
const colour = document.querySelector(".colour");

function generatePad(num = 16) {

	for(let i = 0; i < num; i++) {
		let row = document.createElement("div");
		row.classList.add("row");
		for(let i = 0; i < num; i++ ) {
			let square = document.createElement("div");
			row.appendChild(square);
	
			square.addEventListener("mousemove", () => {
				event.target.style.backgroundColor = colour.value;
			});
		}
		pad.appendChild(row);
	}
}

generatePad();

const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", () => {
	while (pad.firstElementChild) {
		pad.firstElementChild.remove();
	}
	let size = prompt("What size the new grid should be?");
	if (isNaN(size) || size > 100 || size < 2) size = 16;
	generatePad(size);
});