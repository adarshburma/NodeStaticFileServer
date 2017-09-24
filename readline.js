const rl = require("readline");
const events = require("events");
const util = require("util");

var person = {
    name:'',
    saying:[]
}

var readline = rl.createInterface(process.stdin, process.stdout);

    readline.question("what is person's name : " , function(answer){
        person.name = answer;
        readline.setPrompt(`person ${person.name} wants to say something?`);
        readline.prompt();
        readline.on('line',function(line){
            if(line === 'exit'){
                emitter.emit('customEvent', 'Done',500);
                readline.close();
            }else{
                saying = person.saying.push(line);
                readline.setPrompt(`what else ${person.name} say? (type exit to stop saying)`);
                readline.prompt();
                emitter.emit('customEvent', 'success',200);
            }
        });
    });
    
    readline.on('close', function(){
        console.log("%s person sayings %j",person.name ,person.saying);
        process.exit();
    })

emitter = new events.EventEmitter();
emitter.on('customEvent',function(message , status){
    console.log(`message: ${message} status: ${status}`);
});

util.inherits(person,EventEmitter);
