'use strict';
var app;

(function (ns) {
    function CanvasHolder(id) {
        this.holder = document.getElementById(id);
        this.initDom();
    }

    CanvasHolder.prototype = {
        constructor: CanvasHolder,
        initDom: function () {
            this.canvas = document.createElement('canvas');
            this.holder.appendChild(this.canvas);
            this.resize();
        },

        resize: function () {
            var width = this.holder.clientWidth;
            var height = this.holder.clientHeight;
            this.canvas.width = width;
            this.canvas.height = height;
            this.canvas.style.width = width;
            this.canvas.style.height = height;
            this.repaint();
        },

        repaint: function () {

        }
    };

    ns.CanvasHolder = CanvasHolder;
})(app || (app = {}));