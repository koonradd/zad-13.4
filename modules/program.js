var os = require('os');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
var input = process.stdin.read();
var h = input / 3600;
var m = (input % 3600) / 60;
var s = (input % 3600) % 60;
 
if (input < 3600){
    process.stdout.write(+ m + ' minut '  + s + ' sekund');
} else (input >= 3600) {
    
}  process.stdout.write(+ h + ' godzin' + m + ' minut '  + s + ' sekund');


exports.print = getOSinfo;

});

