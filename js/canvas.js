'use strict';
var app;

(function (ns) {

    var BOX = 1;

    function CanvasHolder(id) {
        this.holder = document.getElementById(id);
        this.rafCb = this.startRender.bind(this);
        this.objects = [];

        this.initDom();
        this.startRender();
    }

    CanvasHolder.prototype = {
        constructor: CanvasHolder,
        initDom: function () {
            this.canvas = document.createElement('canvas');
            this.cx = this.canvas.getContext('2d');

            this.cx.strokeStyle = '#000';
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
        },

        startRender: function () {

            this.cx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < this.objects.length; i++) {
                var obj = this.objects[i];
                if (obj.type == BOX) {
                    this.renderBox(obj);
                }
            }
            window.requestAnimationFrame(this.rafCb);
        },
        addBox: function (x, y, w, h) {
            var box = {
                type: BOX,
                x: x + 0.5,
                y: y + 0.5,
                w: w,
                h: h
            };
            this.objects.push(box);
            return box;
        },

        renderBox: function (box) {
            this.cx.strokeRect(box.x, box.y, box.w, box.h);
        }
    };

    ns.CanvasHolder = CanvasHolder;
})(app || (app = {}));