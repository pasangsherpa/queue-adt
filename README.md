# queue-adt [![Build Status](https://travis-ci.org/pasangsherpa/queue-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/queue-adt)

> Queue ADT for browser and nodejs

The **Queue** class represents a first-in-first-out (FIFO) queue of generic items. It supports the usual *enqueue* and *dequeue* operations, along with methods for examining the front of the queue, testing if the queue is empty, and iterating through the items in FIFO order.


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

queue.enqueue(10);
queue.first();
queue.isEmpty();
queue.enqueue("foo");
queue.enqueue({hello: "world"});
queue.first().hello; // Outputs "world"
queue.enqueue(function(){ console.log("hello") });
queue.first()(); // Outputs "world"
queue.size();
queue.dequeue();
queue.size();

var itr = queue.iterator;

while(itr.hasNext()) {
  console.log(itr.next());
}

queue.empty();

```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/queue-adt/master/dist/queue-adt.min.js"></script>
<script type="text/javascript"> 
  var queue = new Queue();

  queue.enqueue(10);
  queue.first();
  queue.isEmpty();
  queue.enqueue("foo");
  queue.enqueue({hello: "world"});
  queue.first().hello; // Outputs "world"
  queue.enqueue(function(){ console.log("hello") });
  queue.first()(); // Outputs "world"
  queue.size();
  queue.dequeue();
  queue.size();

  var itr = queue.iterator;

  while(itr.hasNext()) {
    console.log(itr.next());
  }

  queue.empty();
</script>
```


## Documentation

### Queue()

Creates an empty queue with infinite capacity.

### Queue(initialCapacity)

Creates an empty queue using the specified capacity.

#### initialCapacity

Type: `int`

initialCapacity represents the specified capacity.


### Methods

#### .enqueue(element) `throws "Queue is full" error`

Adds an element to the rear of the queue and returns the new size of the queue.

##### element

Type: `object`

the element to be added to the queue.

#### .dequeue() `throws "Queue is empty" error` 

Removes an element from the front of the queue and returns the element.

Type: `object`

the element removed from the front of the queue.

#### .first() `throws "Queue is empty" error` 

Returns without removing the element at the front of the queue.

Type: `object`

the element at the front of the queue.

#### .isEmpty()

Returns true if this queue contains no elements.

Type: `boolean`

whether or not the queue is empty.

#### .size()

Returns the number of elements in the queue.

Type: `int`

the number of element in the queue.

#### .empty() 

Removes all element from the the queue and returns the new size of the queue.

#### .iterator

Returns an iterator to the queue that iterates through the items in FIFO order.

Type: `object`

the iterator object of the queue

#### .iterator.next() `throws "No such element" error` 

Returns the next item in FIFO order.

#### .iterator.hasNext()

Returns whether the queue has next item in FIFO order.


## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)
