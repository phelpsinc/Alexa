// Name: Chuck Phelps
// Version 0.1 
// Credit to Big Nerd Ranch
/* */
'use strict'; //var
var APP_ID = 'amzn1.ask.skill.4f5d93b8-4800-4fb6-9a57-92566010ca1c';
var AlexaSkill = require('AlexaSkill');
var SPEECH_OUTPUT = 'Chenchu is the man of steel';

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