// Name: Chuck Phelps
// Version 0.1 
// Credit to Big Nerd Ranch
/* Big Nerd Ranch Video - https://www.youtube.com/watch?v=QxgdPI1B7rg&t=1s

Big Nerd Ranch Course Work - https://github.com/bignerdranch/developing-alexa-skills-solutions/blob/master/coursebook/haIntro_Chapter.pdf

Big Nerd Ranch Code - https://github.com/bignerdranch/developing-alexa-skills-solutions/tree/master/1_helloAlexa/*/
'use strict'; //var
var APP_ID = 'amzn1.ask.skill.4f5d93b8-4800-4fb6-9a57-92566010ca1c';
var AlexaSkill = require('AlexaSkill');
var SPEECH_OUTPUT = 'My Pa, Fred Phelps';

var GreeterService = function() {
    AlexaSkill.call(this, APP_ID);
}

GreeterService.prototype = Object.create(AlexaSkill.prototype)

var helloResponseFunction = function(intent, session, response) {
    response.tell (SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;

GreeterService.prototype.intentHandlers = {
    'HelloWorldIntent': helloResponseFunction
};

exports.handler = function(event, context) {
    var greeterService = new GreeterService();
    greeterService.execute(event, context);
};