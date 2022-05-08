const pad = document.querySelector(".pad");

for(let i = 0; i < 16; i++) {
	let row = document.createElement("div");
	row.classList.add("row");
	for(let i = 0; i < 16; i++ ) {
		let square = document.createElement("div");
		row.appendChild(square);

		square.addEventListener("mousemove", () => {
			event.target.style.backgroundColor = "#09EBB0";
		});
	}
	pad.appendChild(row);
}