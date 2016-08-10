'use strict';

// For old browsers that don't support Object.freeze
if (Object.freeze === undefined) {
    Object.freeze = function(obj) {
        return obj;
    };
}
if (!window.console) {
    window.console = {};
}
if (!window.console.log) {
    window.console.log = function () {};
}
if (!window.console.error) {
    window.console.error = function () {};
}