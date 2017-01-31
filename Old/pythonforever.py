from __future__ import print_function
import json
import sys
import os

#script modded after https://github.com/sammachin/helloalexa
# First Lambda Alexa Script

logger = logging.getLogger()
logger.setLevel(logging.INFO)

response_tmp1 = {
    "version": "1.0",
    "response": {
        "outputSpeech": {
        "type": "PlainText",
        "text": "",
        }
    },
    "shouldEndSession": True
}

def PythonForever(name=None):
    next_train_response = response_tmp1
    text_response = "Python Forever"
    next_train_response['response']['outputSpeech']['text'] = text_response
    return next_train_response

def lambda_handler (event, context):
    logger.info('got event {}'.format(event))
    if event['request']['type'] == "IntentRequest":
        if event['request']['intent']['name'] == "PythonForever":
            if event['request']['intent']['slots']['Name']['value'] != None:
                    return PythonForever(event['request']['intent']['slots']['Name']['value'])

            else:
                return PythonForever()
        elif event['request']['type'] == "SessionEndedREquest":
            resp = response_tmp1
            return resp
        else:
            resp = response_tmp1
            response_tmp1["shouldEndSession"] = False
            return response_tmp1 