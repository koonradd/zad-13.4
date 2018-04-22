var os = require("os");
var OSinfo = require("../modules/OSinfo.js");
var time = require("../modules/time.js");

process.stdin.setEncoding("utf-8");
process.stdout.write(
    "Hello in Node app\n" +
    "to run functions write:\n" +
    "/exit" +
    " to exit from application\n" +
    "/info" +
    " to get informations of Node version and System Language\n" +
    "/getOSinfo" +
    " to get informations about your System\n"
);

process.stdin.on("readable", function() {
var input = process.stdin.read();
if (input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
    case "/exit":
        process.stdout.write("Quitting app!");
        process.exit();
        break;
    case "/info":
        process.stdout.write(
        "Your version Node.js: " +
        process.versions.node +
        "\n" +
        "System Language : " +
        process.env.LANG +
        "\n"
        );
        break;
    case "/getOSinfo":
        OSinfo.print();
        break;
    default:
        process.stderr.write("Wrong instruction!\n");
    }
}
});
