const {argv} = require("process")
console.log(require("crypto").createHash(argv[2]).update(argv[3]).digest(argv[4]))
