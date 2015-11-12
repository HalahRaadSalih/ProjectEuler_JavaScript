function multiplesOf3And5(collection){
	 var multiples = [];

	 for(var i = 0; i< 1000; i++){
	 	if(i % 3 === 0 || i % 5 === 0){
	 		multiples.push(i);
	 	}
	 }

	 console.log(sum(multiples));


}

function sum(values){
	 return values.reduce(function(a, b) {
  					return a + b;
				});
}

multiplesOf3And5();