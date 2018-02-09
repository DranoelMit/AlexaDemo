const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    const alexa = ALexa.handler(event, context, callback);
    alexa.appId = '';
    alexa.registerHandlers(handlers);
    alexa.excecute();
};

const handlers = {
    'sayHello' : function() {
	this.emit(':tell', 'Helloooooo there! Can I help you?');
    },
    'sayGoodbye' : function() {
	this.emit(':tell', 'Goodbye');
    }
};