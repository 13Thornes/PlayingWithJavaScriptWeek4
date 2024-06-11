// define/extend on EventEmitter class
const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

// initialize a new emittter object
const myEmitter = new MyEmitter();
// bind 'example' event and set the function when event is emitted(fired)
myEmitter.addListener('example', () => console.log(`First 'example' bound emitter function`));
myEmitter.on('example', () => console.log(`Second 'example' bound emitter function`));
myEmitter.on('example', () => console.log(`Third 'example' bound emitter function`));

myEmitter.on('sample', () => console.log(`First 'sample' bound emitter function`));
myEmitter.on('sample', () => console.log(`Second 'sample' bound emitter function`));
myEmitter.on('sample', () => console.log(`Third 'sample' bound emitter function`));

// count how many listeners have been bound
console.log(`EXAMPLE: The 'example' event count:` + myEmitter.listenerCount('example'));
console.log(`SAMPLE: The 'sample' event count:` + myEmitter.listenerCount('sample'));

// Fire 'example' event
console.log(`\nEMIT (fire) the 'example' event`);
const firstExample = () => { myEmitter.emit('example')};
firstExample();

console.log(`\nEMIT (fire) the 'sample' event`);
const firstSample = () => { myEmitter.emit('sample')};
firstSample();

