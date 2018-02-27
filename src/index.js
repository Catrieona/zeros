module.exports = function getZerosCount(number) {
	var stack = 0;
	var temp = 1;
	var divisor = 5;

	while(temp >= 1){
		temp = Math.trunc(number/divisor)
		stack += temp;
		divisor *= 5;
	}

	return stack;

  }