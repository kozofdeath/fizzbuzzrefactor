document.addEventListener("DOMContentLoaded", function() {
	console.log("ready");
	fizzBuzzer();
})

function fizzBuzzer() {
	document.getElementById("entry").onkeydown = function(event) {
		if (event.which == 13) {
			document.getElementById("content").innerHTML = '';
			var entry = document.getElementById("entry").value;
			document.getElementById("entry").value = '';
			if (parseFloat(entry) % 1 == 0) {
				var results = fizzBuzzArray(parseFloat(entry));
				fizzBuzzDisplay(results);
			} else {
				alert("only enter integers into the input field");
			}
		}
		else {
			console.log(event.which);
		}
	}
}

function fizzBuzzArray(x) {
	var resultArray = new Array();
	for (var i = 1; i < x+1; i++) {
		resultArray.push(fizzBuzzCalc(i));
	}
	return resultArray;
}

function fizzBuzzCalc(i) {
	if (i%3 === 0 && i%5 === 0) {
		return "fizz buzz";
	} else if (i%3 === 0) {
		return "fizz";
	} else if (i%5 === 0) {
		return "buzz";
	} else {
		return i;
	};
}

function fizzBuzzDisplay(ls) {
	for (var i = 0; i<ls.length; i++) {
		fb = document.createTextNode(ls[i]);
		entry = document.createElement("p");
		entry.appendChild(fb);
		content = document.getElementById("content");
		content.appendChild(entry);
	}
}