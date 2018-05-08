//the lambda function that your Alexa skill will connect to.

'use strict';

const AWS = require('aws-sdk');
const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'welcome to control pictures');
    },
    'ShowAllPicturesIntent': function () {
        var docClient = new AWS.DynamoDB.DocumentClient();
        var controlPictureNumber = 0;

        var params = {
            TableName: "ControlPictures",
            Key: {
                "pictureId": 0,
            },
            UpdateExpression: "set pictureToShow = :newImageNumber",
            ExpressionAttributeValues: {
                ":newImageNumber" : controlPictureNumber
            }
        };
        docClient.update(params, (() => {
            this.emit(':ask', 'you asked for all images');
        }));
    },
    'ControlPictureIntent': function () {
        var docClient = new AWS.DynamoDB.DocumentClient();
        var controlPictureNumber = this.event.request.intent.slots.number.value;

        var params = {
            TableName: "ControlPictures",
            Key: {
                "pictureId": 0,
            },
            UpdateExpression: "set pictureToShow = :newImageNumber",
            ExpressionAttributeValues: {
                ":newImageNumber" : controlPictureNumber
            }
        };
        docClient.update(params, (() => {
            this.emit(':ask', 'you said image ' + controlPictureNumber);
        }));
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', 'you can ask for a picture by saying picture number 1');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'bye bye, have a nice day');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'bye bye, have a nice day');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
