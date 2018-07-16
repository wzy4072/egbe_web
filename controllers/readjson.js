var fs = require('fs');

const readFile =  (url) => {
  var result = JSON.parse(fs.readFileSync('./analogData' + url + '.json'));
  return result
}

module.exports = readFile