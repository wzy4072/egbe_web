let fs = require('fs')
const path = require('path')

let tools = {
    reqFils: function (modelPath, cb) {
        fs.readdirSync(modelPath).forEach(function (file) {
            var filePath = path.join(modelPath, '/' + file)
            var stat = fs.statSync(filePath)
            if (stat.isFile()) {
                if (/(.*)\.(js|coffee)/.test(file)) {
                    cb(filePath)
                    // require(filePath)
                }
            }
            else if (stat.isDirectory()) {
                walk(filePath)
            }
        })
    }
}
module.exports = tools