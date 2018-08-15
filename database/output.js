// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function(line){
//     console.log(line);
// })

function main(input) {
    //Enter your code here
    // var inputArr = input.split("\n");
    // var n = parseInt(inputArr[0]);
    // var numbers = inputArr[1].split(" ");
    // var answer = 1;

    // for (var i = 0; i < n; i++){
    //     answer = (answer * parseInt(numbers[i])) % (1000000007);
    //     // console.log(answer);
    // }


    //console.log(answer);
    // process.stdout.write(answer);
}

process.stdin.setRawMode(true);

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    // stdin_input += input;
    console.log('' + input);
});

process.stdin.on("end", function () {
   // main(stdin_input);
   console.log('done')
});