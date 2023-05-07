let result = document.getElementById("result");

function insertValue(value) {
	result.value += value;
}

function clearResult() {
	result.value = "";
}

function calculate() {
	let expression = result.value;
	result.value = eval(expression);
}

function reset() {
	result.value = "";
}
