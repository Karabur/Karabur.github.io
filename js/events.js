'use strict';

var app;
(function (ns) {

    function on(event, cb, context) {
        this[event] = this[event] || [];
        this[event].push([cb, context]);
    }

    function emit() {
        var event = arguments[0];
        var cbList = this[event];
        if (!cbList) return;
        var args = Array.prototype.slice.call(arguments,1);
        for (var i = 0; i < cbList.length; i++) {
            cbList[i][0].apply(cbList[i][1], args);
        }
    }

    function eventize(obj) {
        var events = {};
        obj.on = on.bind(events);
        obj.emit = emit.bind(events);
    }

    ns.eventize = eventize;
})(app || (app={}));