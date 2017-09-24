var path = require("path");
const rl = require("readline");

console.log(`We are on file ${path.basename(__filename)}`);
console.log(process.argv);

function find(flag){
    return (process.argv.indexOf(flag) === -1) ? null : process.argv[process.argv.indexOf(flag)+1];
}
var user = find('--user');
var greeting = find('--greeting');

if(!user || !greeting){
    console.log("user greeting not found");
}else{
    console.log(`${greeting} ${user}`);
}

questions = [
        "what is your name?",
        "where are you from?",
        "why are you here?"
    ]

function ask(i){
    process.stdout.write("\n");
    process.stdout.write(`${questions[i]} > `);
}

answers = [];
ask(0);
answered = 0;
process.stdin.on('data' , function(data){
    answers.push(data.toString().trim());
    if(data.toString().trim().length !== 0){
            answered = answered + 1;
    }
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        (function ans(answers){
            console.log("here are questions and answers");
            for(i = 0;i < answers.length ; i++){
                console.log(`${questions[i]} > ${answers[i]}`);
            }
        })(answers);
        process.exit();
    }
});

process.on('exit', function(){
    console.log(`Captured ${answered} Successfully.`);
});

currentTime = 0;
waitInterval = 500;
timeOut = 3000;
percentageWaited = 0;
function writeWaitingPercentage(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Percentage waited ${p} ... `);
}

var interval = setInterval(function(){
    currentTime += waitInterval;
    percentageWaited = Math.floor((currentTime/timeOut) * 100)
    writeWaitingPercentage(percentageWaited);
}, waitInterval);

setTimeout(function(){
    clearInterval(interval);
    writeWaitingPercentage(100);
    console.log('done ... !!!')
},timeOut);

writeWaitingPercentage(percentageWaited);

