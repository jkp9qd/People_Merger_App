var fs= require('fs');

fs.readFile('./people1.json','utf-8',function(err,people1){
  if(err){
    throw error;
  }
  var parsed1 = JSON.parse(people1);

  fs.readFile('./people2.json','utf-8',function(err,people2){
    if(err){
      throw error;
    }
    var parsed2 = JSON.parse(people2);
    
    var peopleComplete = parsed1.concat(parsed2);
    console.log(peopleComplete.sort());

    fs.writeFile('./peopleComplete.txt',peopleComplete,function(err){
      if(err){
      console.log(`there was an error: ${err}`)
      throw err;
      }
      console.log('content written to file');
    })
  })
}) 