/*global describe, it */
'use strict';
var assert = require('assert');
var Queue = require('../src/queue-adt.js');

it('should pass because foo !=== bar', function() {
    assert.notEqual("foo", "bar");
    assert.equal("foo", "foo");
});
