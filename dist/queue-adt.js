/*!
* queue-adt
* v0.0.1 - 2014-08-01
* https://github.com/pasangsherpa/queue-adt
* (c) Pasang Sherpa <pgyalzen@gmail.com> (https://github.com/pasangsherpa)
* MIT License
*/
(function() {
    'use strict';
    var Queue = {};

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Queue;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Queue;
    } else {
        window.Queue = Queue;
    }
})();
