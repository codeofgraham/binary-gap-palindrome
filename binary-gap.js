//JavaScript document
//Developed by Graham O'Mahony; copyright 2020
//Binary-gap validator
const numberInput = document.getElementById("numberinput"), getBinarygap = document.getElementsByTagName("button")[0], result0 = document.querySelectorAll(".result")[0];
getBinarygap.addEventListener("click", binaryGap, false);
function binaryGap(n){
	"use strict";
	let integerN = numberInput.value;//integerN is the inputted value.
	n = integerN;//Pass value to n.
	n = parseInt(n);//Parse value to an integer.
	//console.log(n);
	if(n >= 1 && n <= 2147483947){//Conditional statement for the set range.
		let gapLength = 0;
		let binaryString = (n).toString(2),//Converts the positive integer to a binary number.
		initiate = binaryString.indexOf("1"),//Search the string for first occurrence of 1.
		terminate = binaryString.lastIndexOf("1"),//Search the string for last occurrence of 1.
		gap = binaryString.substring(initiate, terminate + 1).split("1");//Remove all instances of 1 by splitting the string.
		//console.log(gap);
		for(let i = 0; i < gap.length; i++){//Loop through the binary gap array for longest length of 0s.
			if(gap[i].length > gapLength){
				gapLength = gap[i].length;
			}
		}
		result0.innerHTML = "Positive integer: " + n + "\n<br>" + "Binary number: " + binaryString + "\n<br>" + "Longest binary-gap length: " + gapLength;//Returns results of the queried integer.
		console.log("Positive integer: ", n, "\n", "Binary number: ", binaryString, "\n", "Substring of the binary number, less the 1s: ", gap, "\n", "Longest binary-gap length: ", gapLength);
	} else if(n < 1 || n > 2147483947 || n === ""){
		result0.innerHTML = "The integer you entered, " + n + ", is out of range.";
		console.log("The integer you entered is out of range.");
	} else if(isNaN(n)){
		result0.innerHTML = "Enter a positive integer.";
		console.log("Enter a positive integer.");
	}
	return false;
}