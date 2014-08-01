# queue-adt [![Build Status](https://travis-ci.org/pasangsherpa/queue-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/queue-adt)

> Queue ADT for browser and nodejs


## Install

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/pasangsherpa/queue-adt/master/dist/queue-adt.min.js
[max]: https://raw.githubusercontent.com/pasangsherpa/queue-adt/master/dist/queue-adt.js

```sh
$ npm install --save queue-adt
```

```sh
$ bower install --save queue-adt
```


## Usage

```js
var Queue = require('queue-adt');
var queue = new Queue();

queue.enqueue(1);
queue.first();
queue.isEmpty();
queue.size();
queue.dequeue();
queue.size();
```


## Documentation

### Queue()

Creates an empty queue using the default capacity.

### Queue(initialCapacity)

Creates an empty queue using the specified capacity.

#### initialCapacity

Type: `int`

initialCapacity represents the specified capacity.


### Methods

#### .enqueue(element)

Adds one element to the rear of the queue.

##### element

Type: `object`

the element to be added to the rear of the queue.

#### .dequeue()

Removes and returns the element at the front of the queue.

Type: `object`

the element at the front of the queue.

#### .first()

Returns without removing the element at the front of the queue.

Type: `object`

the first element in the queue.

#### .isEmpty()

Returns true if this queue contains no elements.

Type: `boolean`

whether or not the queue is empty.

#### .size()

Returns the number of elements in the queue.

Type: `int`

the number of element in the queue.


## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)
