'use strict'; var
APP_ID = undefined;
var AlexaSkill = require('AlexaSkill');
var SPEECH_OUTPUT = 'Hello';

var GreeterService = function() {
    AlexaSkill.call(this, APP_ID);
}

GreeterService.prototype = Object.create(AlexaSkill.prototype)