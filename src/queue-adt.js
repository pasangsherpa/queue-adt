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
