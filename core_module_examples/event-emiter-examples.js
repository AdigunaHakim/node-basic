const { EventEmitter } = require('events');

const myEmiter = new EventEmitter();

// listener, 
myEmiter.on('greeting', () => {
    console.log('Hello World');
});

// emiter, its will trigger to listener
myEmiter.emit('greeting');