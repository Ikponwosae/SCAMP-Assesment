
function fib(n){
	var arg = [0, n];

	while(n <= 200){

		var b = arg[arg.length - 1] + arg[arg.length - 2];
		arg.push(b);
		n = arg[arg.length - 1];
	}
	return arg;
}

//calling the fib function

  console.log(fib(4));
