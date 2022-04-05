# Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function find2MinAnd2Max(input) {
	var min, min2, max, max2;
	if(input.lenght < 2) {
	      return; 
	} else {
		if(input[0] > input[1]) {
			max = min2 = input[0];
			max2 = min = input[1];
		} else {
			min = max2 = input[0];
			min2 = max = input[1];
		}
	}
	for(i=2; i<input.length; i++) {
		if(max < input[i]) {
			max2 = max;
			max = input[i];
		} else if(max2 < input[i]) { 
			max2 = input[i];
		} else if(min > input[i]) { 
			min2 = min;
			min = input[i];
		} else if(min2 > input[i]) {
			min2 = input[i];
		}
	}
  console.log(min, min2, max2, max);
	
}
find2MinAnd2Max([2, 5, 7, 6, 3, 1])