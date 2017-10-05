var fs = require('fs');

var fileCollector = []; 
fs.readdir('.', (err, files) => {
	if (err) {
	throw err; 
	}
	for(var i = 0; i < files.length; i++) {
		//fileCollector.push(files[i]);
		
		if (files[i].includes('json') == true ) {
			fs.readFile(files[i], 'utf-8', (err, data) => {
				if (err) {
					throw err;
				}
				fileCollector[i].push(data);
			})
		}
		else {
			//do nothing with the file 
		}
		fs.writeFile('allPeoplesNames.txt', fileCollector, (err)=>{
					if (err) {
						throw err; 
					}
					//console.log('file written!');
				} )

	}

})
