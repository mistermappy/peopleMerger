var fs = require('fs'); 

var collector = [];
var allFiles = []; 

fs.readdir('.', (err, files) => {
	if (err) {
		throw err; 
	}
	for(var i = 0; i < files.length; i++) {
		allFiles.push(files[i])
	}
	console.log(allFiles);
})

fs.readFile('./people1.json', 'utf-8', (err, data) => {
	if (err) {
		console.log(`an error occured: ${err}`)
		throw err; 
	}
	//var data_sorted = data.split().sort((a,b)=>{return a-b;}).join(); 
	var peopleNames1 = JSON.parse(data)
	var peopleNames1_sorted = peopleNames1.sort(); 
	//for(var i = 0; i < x.length; i++) {
	//console.log(x[i]);
	//collector.push(x[i]);


	fs.readFile('./people2.json', 'utf-8', (err, data) => {
	if (err) {
		console.log(`an error occured: ${err}`);
		throw err; 
	}
	var peopleNames2 = JSON.parse(data)
	var peopleNames2_sorted = peopleNames2.sort() 
	//for(var i = 0; i < y.length; i++) {
	//console.log(y[i]);
	//collector.push(y[i])

	var collection_sorted = peopleNames2_sorted.concat(peopleNames1_sorted).sort();

	fs.writeFile('sorted_people.txt', collector, (err) => {
		if (err) {
			throw err; 
		}
		
		console.log('file written!')

	})

	for(var i = 0; i < collection_sorted.length ; i++) {
		collector.push(collection_sorted[i] + '\r\n');
	}
})}); 