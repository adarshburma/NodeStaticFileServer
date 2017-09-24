var https = require("https");
var fs = require("fs");
module.exports = {
    printName(person){
        return person.lastName + ' ,' + person.firstName;
    },

    wikiRequest(person,callback){
        responseBody = "";

        url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;

        https.get(url,function(res){

            res.setEncoding("UTF-8");

            res.on("data",function(chunk){
                responseBody += chunk;
            });

            res.on("end",function(){

                fs.writeFile("./abraham-lincoln.html",responseBody,function(err){
                    if(err){
                        throw err;
                    }
                    console.log("File Downloaded"); 
                });

                callback(responseBody);
            });
        });
    }
}