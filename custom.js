var tablo = document.querySelector(".tablo");

var numbers = document.querySelectorAll(".number");
for (var i = 0; i < numbers.length; i++) {
	numbers[i].onclick = function() {
		tablo.textContent += this.textContent;
	}
}

var operators = document.querySelectorAll(".operator");
for (var i = 0; i < operators.length; i++) {
	operators[i].onclick = function() {
		tablo.textContent += " " + this.textContent + " ";
	}
}

var clearButton = document.querySelector(".clear");
clearButton.onclick = function() {
	tablo.textContent = "";
}

var equalButton = document.querySelector(".equal");
equalButton.onclick = function() {
	var str = tablo.textContent;
	tablo.textContent = eval(str);
}