//Step 1: create variable to keep track of result

console.log('test');
var result = 0;

//Step 2: on click of 0 button we need to assign a value of zero
$('#zero').click(function() {
	updateResult(0);
	});
//Step 3: on click of +5 button add 5 to result, show new result
$('#add5').click(function() {
	updateResult(5);
});
//Step 4: on click of +10 button, add 10 to result, show new result
$('#add10').click(function () {
	updateResult(10);
});
//Step 5: on click of -1 button subract 1, show result
$('#sub1').click(function() {
	updateResult(-1);
});
function updateResult (newNum) {
	result = result + newNum;

	//add result to page
	$('#result').text(result);
}



// function addZero() {
// 	// update result
// 	result = result + 0;

// 	//add result to page
// 	$('#result').text(result);

// }
// function addFive() {
// 	// update result
// 	result = result + 5;

// 	//add result to page
// 	$('#result').text(result);

// }
// function addTen() {
// 	// update result
// 	result = result + 10;

// 	//add result to page
// 	$('#result').text(result);

// }
// function subOne() {
// 	// update result
// 	result = result - 1;

// 	//add result to page
// 	$('#result').text(result);

// }



