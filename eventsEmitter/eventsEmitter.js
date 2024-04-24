const EventEmitter = require('events');

// Creating an EventEmitter instance
const myEmitter = new EventEmitter();

// Listening to custom events
myEmitter.on('fileData', (data) => {
    console.log('File data:', data);
});

myEmitter.on('error', (err) => {
    console.error('Error reading file:', err);
});

module.exports = myEmitter;
