'use strict';
var app;

(function (ns) {

    var items = [
        {
            title: 'What is that place?'
        }
    ];


    function Menu(id) {
        ns.eventize(this);

        this.el = document.getElementById(id);
        this.init();
    }

    Menu.prototype = {
        constructor: Menu,
        init: function () {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                item.el = document.createElement('div');
                var el = item.el;
                el.className = 'item';
                this.el.appendChild(el);
                el.innerText = item.title;
            }
        }
    };


    ns.Menu = Menu;
})(app || (app = {}));