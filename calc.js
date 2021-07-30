let tombol = document.querySelector(".container-button");
let screen = document.querySelector("#screen")

tombol.addEventListener("click", function (e) {
	let tombolClick = e.target;
	let nilaiTombol = tombolClick.innerText;


	if(nilaiTombol == "C") {
		screen.value = "";
	} else if (nilaiTombol == "Del") {
		screen.value = screen.value.slice(0, -1);
	} else if (nilaiTombol == "=" && screen.value == "") {
		alert("Silahkan Masukkan Angka!");
	} else if (nilaiTombol == "=") {
		screen.value = eval(screen.value);
	} else {
		screen.value += nilaiTombol;
	}

})
