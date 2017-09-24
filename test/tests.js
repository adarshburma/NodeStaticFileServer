
var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function(){
    describe("series of tests with functions in tools",function(){
        it("returns last name followed by first name",function(){
            expect(tools.printName({firstName : "Adarsh" , lastName : "Burma"})).to.equal("Burma ,Adarsh");
        });
    });

    describe("Asynchronous requests" , function(){
        before(function(){
            nock("https://en.wikipedia.org")
            .get("/wiki/Abraham_Lincoln")
            .reply(200,"Abraham-Lincoln wiki page");
        });

        it("returns HTML chunks on request to wiki", function(done){
            tools.wikiRequest({first : "Abraham", last : "Lincoln"},function(html){
                expect(html).to.equal("Abraham-Lincoln wiki page");
                done();
            });    
        });
    });
});


    
   
