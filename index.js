var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(error, stats) {
  var statMode = new StatMode(stats);
  console.log(statMode.toString() + '\n');
});

fs.readFile('./text.txt', 'utf-8', function(error, data) {
  console.log('Text.txt przez zapisem'.blue);
  console.log(data);
  fs.appendFile('./text.txt', '\nSome text we gonna put into text.txt file:)', function(error) {
    if(error) {
      throw error;
    }
    //lub if(error) throw error;
    console.log('File modified!');
    fs.readFile('./text.txt', 'utf-8', function(error, data) {
      console.log('Text.txt po zapisie'.blue);
      console.log(data);
    });
  });
  // fs.readFile('./text.txt', 'utf-8', function(error, data) {
  //   console.log('Text.txt po zapisie'.blue);
  //   console.log(data);
  // });
});

fs.readdir('.', function(error, files) {
  if(error) throw error;
  var content = new String;
  files.forEach(function(file) {
    content += file + '\n';
  });
  fs.writeFile('./task_result.txt', content, function(error) {
    if(error) throw error;
  });
});
