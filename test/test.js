/*global describe, it */
'use strict';
var assert = require('assert');
var Queue = require('../src/queue-adt.js');

var queue = new Queue(3);

describe('queue operation test', function() {

    it('should create an empty queue in the beginning', function() {
        assert.throws(function() {
            queue.dequeue();
            throw new Error("Queue is empty");
        }, Error);
        assert.throws(function() {
            queue.first();
            throw new Error("Queue is empty");
        }, Error);
        assert.equal(queue.size(), 0);
        assert.equal(queue.isEmpty(), true);
    });

    it('should be able to add elements to the queue', function() {
        queue.enqueue("foo");
        queue.enqueue("bar");
        queue.enqueue(1);

        assert.equal(queue.first(), "foo");
        assert.equal(queue.size(), 3);
        assert.equal(queue.isEmpty(), false);
    });

    it('should throw error when queue capacity is reached', function() {
        assert.throws(function() {
            queue.enqueue(2);
            throw new Error("Queue is full");
        }, Error);
        assert.equal(queue.first(), "foo");
        assert.equal(queue.size(), 3);
        assert.equal(queue.isEmpty(), false);
    });

    it('should be able to remove element from the queue', function() {
        assert.equal(queue.dequeue(), "foo");
        assert.equal(queue.size(), 2);
        assert.equal(queue.isEmpty(), false);
    });

    it('should empty the entire queue', function() {
        assert.equal(queue.isEmpty(), false);
        assert.equal(queue.size(), 2);
        queue.empty();
        assert.equal(queue.isEmpty(), true);
        assert.equal(queue.size(), 0);
    });

    it('should iterate through the items without removing any item from the queue', function() {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        var itr = queue.iterator,
            items = [1, 2, 3],
            index = 0;
        while (itr.hasNext()) {
            assert.equal(itr.next(), items[index++]);
        }
    });
});
