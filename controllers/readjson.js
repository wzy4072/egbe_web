var fs = require('fs');

var url = '/stu/list/add'

// var filses = fs.readdirSync('./analogData' + url)
// console.log(filse)
// fs.readdirSync(path)
// var file = "./stulist.json";
var result = JSON.parse(fs.readFileSync('./analogData' + url + '.json'));
console.log(result);