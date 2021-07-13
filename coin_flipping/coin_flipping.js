function tossCoin() {
	return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeads() {
	return new Promise( (resolve, reject) => {
		let headsCount = 0;
		let attempts = 0;
		while(headsCount < 5) {
			if(attempts>100){
				reject("Your coin has been flipped 100 times and no five heads in a row.")
			}
			attempts++;

			let result = tossCoin();
			console.log(result)
			if(result === "heads"){
			headsCount++;
			}

			else {
			headsCount = 0;
			}
		}
		resolve(`It took ${attempts} tries to flip five "heads"`)
	});
}
fiveHeads()
.then( res => console.log(res) )
.catch( err => console.log(err) );

