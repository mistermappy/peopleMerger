var fs = require('fs'); 

fs.readFile('./people1.json', 'utf-8', (err, data) => {
	if (err) {
		console.log(`an error occured: ${err}`)
		throw err; 
	}
	//var data_sorted = data.split().sort((a,b)=>{return a-b;}).join(); 
	var peopleNames1 = JSON.parse(data)
	var x = peopleNames1.sort(); 
	for(var i = 0; i < x.length; i++) {
	//console.log(x[i]);
	//collector.push(x[i]);
	}

	fs.readFile('./people2.json', 'utf-8', (err, data) => {
	if (err) {
		console.log(`an error occured: ${err}`);
		throw err; 
	}
	var peopleNames2 = JSON.parse(data)
	var y = peopleNames2.sort() 
	for(var i = 0; i < y.length; i++) {
	//console.log(y[i]);
	//collector.push(y[i])
	}

	var collection_sorted = y.concat(x).sort()

	fs.writeFile('sorted_people.txt', collection_sorted, (err) => {
		if (err) {
			throw err; 
		}
		
		console.log('file written!')

	})

	/*fs.readdir('.', (err, files)=> {
		if (err) {
			throw err;
		}
		console.log(files);
	})*/
})}); 


