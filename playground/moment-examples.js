var moment = require('moment');


console.log(moment().format());

var now = moment();

console.log("CUrrent ",now.unix());

var timestamp = 1487493783;
var currentMoment = moment.unix(timestamp);
console.log('Currnet mo ',currentMoment.format("MMM D, YY @ H:mm:ss"));