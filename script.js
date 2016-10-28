var farenheit = 32;
var a = 5/9;
var b = farenheit - 32;
var c = a * b;
var today = "Hi, today the temperature in Farenheit is ";
var todayCelsius = "The temperature in Celsius is ";

console.log(today + farenheit);
console.log(todayCelsius + c);


var celsius = 0;
var e = 9/5;
var d = c * e;
var g = d + 32;
var todayC = "Hi, today's temperature in Celsius is ";
var todayFarenheit = "The temperature in Farenheit is ";

console.log(todayC + celsius);
console.log(todayFarenheit + g);

function toCelsius() {
	var ltoday = document.getElementById ('today');
	ltoday.innerHTML = today;
};