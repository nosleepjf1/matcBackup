/**
 * Created by bobnweave on 10/12/16.
 */
    'use strict';
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();
myEmitter.once('greeting', function (msg, msg2) {
    console.log('greeting received ' + msg + msg2);
})
myEmitter.on('praise', function (msg, msg2) {
    console.log('praise received ' + msg + msg2);
})


myEmitter.emit('greeting', 'hello', 'hi');
myEmitter.emit('greeting', 'hey', 'how are you');
myEmitter.emit('praise', 'you ', 'rock');
