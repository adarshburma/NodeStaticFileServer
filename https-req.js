const https = require("https");
const fs = require("fs");

var options = {
    host:"en.wikipedia.org",
    port:443,
    path: "/wiki/George_Washington",
    method: "GET"
}

var req = https.request(options, function(res){
    var responseBody = "";
    console.log("response started ...")
    console.log(`Request Status code: ${res.statusCode}`)
    console.log("Response Headers : %j",res.headers);
    res.setEncoding("UTF-8");

    res.once("data", function(chunk){
        console.log(chunk);
    });

    res.on("data",function(chunk){
        console.log(`--chunk-- ${chunk.length}`); 
        responseBody += chunk;
    });

    res.on("end",function(){
        fs.writeFile("george-washington.html",responseBody,function(err){
            if(err){
                throw err;
            }
            console.log("File Downloaded"); 
        });
    });   
});

req.on("error",function(err){
    console.log(`Error occured ${err.message}`)
});

req.end();

