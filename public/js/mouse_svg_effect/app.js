var App = (function() {
    function App(container) {
        var _this = this;
        this.width = 600;
        this.height = 600;
        this.followers = [];
        this.colors = ['red', 'blue', 'green', 'yellow', 'white'];
        this.previewMode = false;
        this.record = false;
        this.recording = [];
        console.log('APP STARTED');
        this.previewMode = location.pathname.match(/fullcpgrid/i);
        this.container = container;
        this.svg = document.getElementById('stage');
        window.addEventListener('resize', function() { return _this.onResize(); });
        this.onResize();
        this.colors.map(function(color) { return _this.followers.push(new Follower(_this.svg, color)); });
        var input = new Input(this.container);
        input.starts.subscribe(function() {
            _this.recording = [];
            _this.record = true;
        });
        input.ends.subscribe(function() {
            _this.record = false;
            console.clear();
            console.log(JSON.stringify(_this.recording));
        });
        input.moves
            .distinctUntilChanged(function(a, b) { return a.x == b.x && a.y == b.y; })
            .subscribe(function(position) {
                if (_this.autoMouse)
                    _this.autoMouse.unsubscribe();
                _this.followers.map(function(follower) { return follower.add(position); });
                if (_this.record) {
                    _this.recording.push({
                        x: (position.x / _this.width) * 100,
                        y: (position.y / _this.height) * 100
                    });
                }
            });
        var path = [{ "x": 48.47222222222222, "y": 50.30581039755352 }, { "x": 48.19444444444444, "y": 51.52905198776758 }, { "x": 47.5, "y": 53.36391437308868 }, { "x": 46.111111111111114, "y": 55.35168195718655 }, { "x": 44.375, "y": 56.574923547400616 }, { "x": 42.36111111111111, "y": 57.3394495412844 }, { "x": 40.13888888888889, "y": 57.3394495412844 }, { "x": 38.54166666666667, "y": 57.3394495412844 }, { "x": 36.52777777777778, "y": 53.97553516819572 }, { "x": 36.18055555555556, "y": 52.90519877675841 }, { "x": 35.34722222222222, "y": 47.55351681957187 }, { "x": 35.27777777777778, "y": 42.813455657492355 }, { "x": 35.27777777777778, "y": 38.379204892966364 }, { "x": 35.97222222222222, "y": 34.25076452599388 }, { "x": 37.15277777777778, "y": 30.886850152905197 }, { "x": 38.47222222222222, "y": 27.981651376146786 }, { "x": 40, "y": 26.452599388379205 }, { "x": 41.388888888888886, "y": 25.840978593272173 }, { "x": 42.77777777777778, "y": 25.840978593272173 }, { "x": 43.81944444444444, "y": 25.993883792048926 }, { "x": 44.79166666666667, "y": 27.675840978593275 }, { "x": 45.69444444444444, "y": 29.66360856269113 }, { "x": 46.736111111111114, "y": 32.56880733944954 }, { "x": 47.77777777777778, "y": 36.23853211009174 }, { "x": 48.95833333333333, "y": 40.36697247706422 }, { "x": 50.416666666666664, "y": 44.64831804281346 }, { "x": 52.361111111111114, "y": 48.62385321100918 }, { "x": 54.37499999999999, "y": 51.52905198776758 }, { "x": 56.52777777777778, "y": 53.36391437308868 }, { "x": 59.02777777777778, "y": 53.97553516819572 }, { "x": 61.458333333333336, "y": 53.97553516819572 }, { "x": 63.61111111111111, "y": 53.21100917431193 }, { "x": 65.76388888888889, "y": 51.52905198776758 }, { "x": 67.84722222222223, "y": 49.38837920489297 }, { "x": 69.51388888888889, "y": 47.24770642201835 }, { "x": 70.625, "y": 45.412844036697244 }, { "x": 71.38888888888889, "y": 42.96636085626911 }, { "x": 71.66666666666667, "y": 39.908256880733944 }, { "x": 71.66666666666667, "y": 36.54434250764526 }, { "x": 70.90277777777779, "y": 32.87461773700306 }, { "x": 68.54166666666667, "y": 26.605504587155966 }, { "x": 66.52777777777777, "y": 23.24159021406728 }, { "x": 64.86111111111111, "y": 21.253822629969417 }, { "x": 63.19444444444444, "y": 20.18348623853211 }, { "x": 61.38888888888889, "y": 20.03058103975535 }, { "x": 59.72222222222222, "y": 20.03058103975535 }, { "x": 58.54166666666667, "y": 20.948012232415902 }, { "x": 57.291666666666664, "y": 23.08868501529052 }, { "x": 55.90277777777778, "y": 25.993883792048926 }, { "x": 54.23611111111111, "y": 29.81651376146789 }, { "x": 51.24999999999999, "y": 36.391437308868504 }, { "x": 48.26388888888889, "y": 42.04892966360856 }, { "x": 44.30555555555556, "y": 48.62385321100918 }, { "x": 39.58333333333333, "y": 54.58715596330275 }, { "x": 34.236111111111114, "y": 59.63302752293578 }, { "x": 28.888888888888886, "y": 62.99694189602446 }, { "x": 25.27777777777778, "y": 64.83180428134557 }, { "x": 21.041666666666668, "y": 65.29051987767585 }, { "x": 17.77777777777778, "y": 65.29051987767585 }, { "x": 15.208333333333332, "y": 64.6788990825688 }, { "x": 12.291666666666666, "y": 60.85626911314985 }, { "x": 10, "y": 55.5045871559633 }, { "x": 8.194444444444445, "y": 48.47094801223242 }, { "x": 7.222222222222221, "y": 42.354740061162076 }, { "x": 6.805555555555555, "y": 34.25076452599388 }, { "x": 6.805555555555555, "y": 27.82874617737003 }, { "x": 7.569444444444444, "y": 22.32415902140673 }, { "x": 8.055555555555555, "y": 21.100917431192663 }, { "x": 11.597222222222223, "y": 16.819571865443425 }, { "x": 14.86111111111111, "y": 15.29051987767584 }, { "x": 19.65277777777778, "y": 14.220183486238533 }, { "x": 23.26388888888889, "y": 14.220183486238533 }, { "x": 27.083333333333332, "y": 15.443425076452598 }, { "x": 29.72222222222222, "y": 18.04281345565749 }, { "x": 31.944444444444443, "y": 21.55963302752294 }, { "x": 34.375, "y": 27.981651376146786 }, { "x": 35.97222222222222, "y": 32.87461773700306 }, { "x": 37.708333333333336, "y": 38.99082568807339 }, { "x": 39.44444444444444, "y": 44.64831804281346 }, { "x": 41.11111111111111, "y": 49.08256880733945 }, { "x": 42.77777777777778, "y": 52.293577981651374 }, { "x": 45, "y": 54.74006116207951 }, { "x": 47.291666666666664, "y": 56.574923547400616 }, { "x": 50.27777777777778, "y": 57.49235474006116 }, { "x": 54.93055555555556, "y": 58.103975535168196 }, { "x": 57.08333333333333, "y": 58.103975535168196 }, { "x": 60.34722222222222, "y": 56.42201834862385 }, { "x": 63.125, "y": 53.669724770642205 }, { "x": 66.11111111111111, "y": 50.764525993883794 }, { "x": 68.61111111111111, "y": 48.62385321100918 }, { "x": 70.90277777777779, "y": 47.24770642201835 }, { "x": 73.125, "y": 46.788990825688074 }, { "x": 75.20833333333333, "y": 46.788990825688074 }, { "x": 77.22222222222223, "y": 46.788990825688074 }, { "x": 79.09722222222221, "y": 47.55351681957187 }, { "x": 80.83333333333333, "y": 48.62385321100918 }, { "x": 83.61111111111111, "y": 49.84709480122324 }, { "x": 84.44444444444444, "y": 50 }, { "x": 86.875, "y": 50 }, { "x": 88.33333333333333, "y": 48.1651376146789 }, { "x": 89.44444444444444, "y": 45.718654434250766 }, { "x": 90.13888888888889, "y": 43.27217125382263 }, { "x": 90.34722222222223, "y": 39.908256880733944 }, { "x": 90.34722222222223, "y": 34.09785932721712 }, { "x": 89.58333333333334, "y": 30.275229357798167 }, { "x": 87.63888888888889, "y": 25.382262996941897 }, { "x": 85.41666666666666, "y": 21.712538226299692 }, { "x": 83.19444444444444, "y": 19.418960244648318 }, { "x": 80.83333333333333, "y": 18.04281345565749 }, { "x": 78.68055555555556, "y": 17.584097859327215 }, { "x": 77.01388888888889, "y": 17.584097859327215 }, { "x": 75.34722222222221, "y": 17.584097859327215 }, { "x": 74.02777777777779, "y": 18.501529051987767 }, { "x": 72.63888888888889, "y": 20.642201834862387 }, { "x": 71.04166666666667, "y": 24.159021406727827 }, { "x": 69.375, "y": 28.440366972477065 }, { "x": 67.56944444444444, "y": 33.63914373088685 }, { "x": 65.83333333333333, "y": 38.07339449541284 }, { "x": 63.95833333333333, "y": 41.437308868501525 }, { "x": 61.736111111111114, "y": 43.883792048929664 }, { "x": 59.65277777777778, "y": 44.95412844036697 }, { "x": 57.291666666666664, "y": 45.25993883792049 }, { "x": 55.34722222222223, "y": 44.342507645259936 }, { "x": 53.333333333333336, "y": 42.04892966360856 }, { "x": 51.24999999999999, "y": 39.296636085626915 }, { "x": 48.95833333333333, "y": 36.69724770642202 }, { "x": 45.69444444444444, "y": 34.70948012232416 }, { "x": 44.44444444444444, "y": 34.70948012232416 }, { "x": 40.13888888888889, "y": 34.70948012232416 }, { "x": 37.84722222222222, "y": 36.850152905198776 }, { "x": 35.55555555555556, "y": 39.60244648318042 }, { "x": 33.05555555555556, "y": 43.425076452599384 }, { "x": 30.625000000000004, "y": 47.09480122324159 }, { "x": 26.805555555555554, "y": 52.752293577981646 }, { "x": 24.65277777777778, "y": 55.81039755351682 }, { "x": 22.15277777777778, "y": 58.86850152905198 }, { "x": 19.86111111111111, "y": 61.773700305810394 }, { "x": 18.194444444444443, "y": 63.76146788990825 }, { "x": 16.59722222222222, "y": 65.13761467889908 }, { "x": 14.791666666666666, "y": 65.90214067278288 }, { "x": 13.333333333333334, "y": 66.05504587155964 }, { "x": 12.083333333333334, "y": 65.90214067278288 }, { "x": 11.180555555555555, "y": 63.91437308868502 }, { "x": 10.694444444444445, "y": 61.92660550458715 }, { "x": 10.277777777777777, "y": 59.48012232415903 }, { "x": 10.069444444444445, "y": 56.88073394495413 }, { "x": 10.069444444444445, "y": 54.58715596330275 }, { "x": 10.902777777777779, "y": 48.92966360856269 }, { "x": 12.986111111111112, "y": 42.04892966360856 }, { "x": 15.069444444444443, "y": 37.308868501529055 }, { "x": 17.77777777777778, "y": 32.11009174311927 }, { "x": 20.34722222222222, "y": 28.899082568807337 }, { "x": 24.375, "y": 27.217125382262996 }, { "x": 27.98611111111111, "y": 27.217125382262996 }, { "x": 31.11111111111111, "y": 27.217125382262996 }, { "x": 34.791666666666664, "y": 28.899082568807337 }, { "x": 37.916666666666664, "y": 31.65137614678899 }, { "x": 39.09722222222222, "y": 33.79204892966361 }, { "x": 40, "y": 36.54434250764526 }, { "x": 40.763888888888886, "y": 40.0611620795107 }, { "x": 42.36111111111111, "y": 46.330275229357795 }, { "x": 44.583333333333336, "y": 53.36391437308868 }, { "x": 46.31944444444444, "y": 57.645259938837924 }, { "x": 48.26388888888889, "y": 61.31498470948012 }, { "x": 50.55555555555556, "y": 63.149847094801224 }, { "x": 52.84722222222222, "y": 63.455657492354746 }, { "x": 55.27777777777778, "y": 63.455657492354746 }, { "x": 58.05555555555556, "y": 61.16207951070336 }, { "x": 60.69444444444444, "y": 59.021406727828754 }, { "x": 62.916666666666664, "y": 56.88073394495413 }, { "x": 64.93055555555556, "y": 54.58715596330275 }, { "x": 66.31944444444444, "y": 52.44648318042814 }, { "x": 66.875, "y": 50.917431192660544 }, { "x": 67.43055555555556, "y": 48.62385321100918 }, { "x": 67.70833333333334, "y": 46.330275229357795 }, { "x": 67.70833333333334, "y": 44.64831804281346 }, { "x": 67.5, "y": 43.27217125382263 }, { "x": 66.80555555555556, "y": 41.74311926605505 }, { "x": 65.97222222222221, "y": 40.825688073394495 }, { "x": 65.48611111111111, "y": 40.67278287461774 }, { "x": 64.65277777777779, "y": 40.36697247706422 }, { "x": 64.02777777777777, "y": 40.214067278287466 }, { "x": 63.05555555555556, "y": 40.214067278287466 }, { "x": 62.01388888888889, "y": 40.214067278287466 }, { "x": 61.458333333333336, "y": 40.51987767584097 }, { "x": 60.27777777777777, "y": 41.13149847094802 }, { "x": 59.09722222222222, "y": 42.04892966360856 }, { "x": 58.12500000000001, "y": 42.813455657492355 }, { "x": 57.22222222222222, "y": 43.730886850152906 }, { "x": 56.458333333333336, "y": 44.4954128440367 }, { "x": 55.486111111111114, "y": 45.412844036697244 }, { "x": 54.37499999999999, "y": 46.63608562691132 }, { "x": 53.75, "y": 46.94189602446483 }, { "x": 52.56944444444444, "y": 47.40061162079511 }, { "x": 51.31944444444444, "y": 47.85932721712538 }];
        if (location.pathname.match(/fullcpgrid/i))
            this.autoMouse = Rx.Observable.interval(20).map(function(i) { return path[i % path.length]; })
            .map(function(p) {
                return {
                    x: (p.x / 100) * _this.width,
                    y: (p.y / 100) * _this.height
                };
            })
            .subscribe(function(position) { return _this.followers.map(function(follower) { return follower.add(position); }); });
    }
    App.prototype.onResize = function() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.svg.setAttribute('width', String(this.width));
        this.svg.setAttribute('height', String(this.height));
    };
    return App;
}());
var Follower = /** @class */ (function() {
    function Follower(stage, color) {
        var _this = this;
        this.removeDelay = 400;
        this.points = [];
        this.stage = stage;
        this.color = color;
        this.line = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.line.style.fill = this.color;
        this.stage.appendChild(this.line);
        window.requestAnimationFrame(function() { return _this.trim(); });
    }
    Follower.prototype.getDrift = function() {
        return (Math.random() - 0.5) * 3;
    };
    Follower.prototype.add = function(position) {
        var direction = { x: 0, y: 0 };
        if (this.points[0]) {
            direction.x = (position.x - this.points[0].position.x) * 0.25;
            direction.y = (position.y - this.points[0].position.y) * 0.25;
        }
        var point = {
            position: position,
            time: new Date().getTime(),
            drift: { x: this.getDrift() + (direction.x / 2), y: this.getDrift() + (direction.y / 2) },
            age: 0,
            direction: direction
        };
        var shapeChance = Math.random();
        var chance = 0.1;
        if (shapeChance < chance)
            this.makeCircle(point);
        else if (shapeChance < chance * 2)
            this.makeSquare(point);
        else if (shapeChance < chance * 3)
            this.makeTriangle(point);
        this.points.unshift(point);
    };
    Follower.prototype.createLine = function(points) {
        var path = [points.length ? 'M' : ''];
        if (points.length > 0) {
            var forward = true;
            var i = 0;
            while (i >= 0) {
                var point = points[i];
                var offsetX = point.direction.x * ((i - points.length) / points.length) * 0.6;
                var offsetY = point.direction.y * ((i - points.length) / points.length) * 0.6;
                var x = point.position.x + (forward ? offsetY : -offsetY);
                var y = point.position.y + (forward ? offsetX : -offsetX);
                point.age += 0.2;
                path.push(String(x + (point.drift.x) * point.age));
                path.push(String(y + (point.drift.y) * point.age));
                i += forward ? 1 : -1;
                if (i == points.length) {
                    i--;
                    forward = false;
                }
            }
        }
        var pathString = path.join(' ');
        return pathString;
    };
    Follower.prototype.trim = function() {
        var _this = this;
        if (this.points.length > 0) {
            var last = this.points[this.points.length - 1];
            var now = new Date().getTime();
            if (last.time < now - this.removeDelay)
                this.points.pop();
        }
        this.line.setAttribute('d', this.createLine(this.points));
        window.requestAnimationFrame(function() { return _this.trim(); });
    };
    Follower.prototype.makeCircle = function(point) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute('r', String((Math.abs(point.direction.x) + Math.abs(point.direction.y)) * 1));
        circle.style.fill = this.color;
        circle.setAttribute('cx', '0');
        circle.setAttribute('cy', '0');
        this.moveShape(circle, point);
    };
    Follower.prototype.makeSquare = function(point) {
        var size = (Math.abs(point.direction.x) + Math.abs(point.direction.y)) * 1.5;
        var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        square.setAttribute('width', String(size));
        square.setAttribute('height', String(size));
        square.style.fill = this.color;
        this.moveShape(square, point);
    };
    Follower.prototype.makeTriangle = function(point) {
        var size = (Math.abs(point.direction.x) + Math.abs(point.direction.y)) * 1.5;
        var triangle = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        triangle.setAttribute('points', "0,0 " + size + "," + size / 2 + " 0," + size);
        triangle.style.fill = this.color;
        this.moveShape(triangle, point);
    };
    Follower.prototype.moveShape = function(shape, point) {
        var _this = this;
        this.stage.appendChild(shape);
        var driftX = point.position.x + (point.direction.x * (Math.random() * 20)) + point.drift.x * (Math.random() * 10);
        var driftY = point.position.y + (point.direction.y * (Math.random() * 20)) + point.drift.y * (Math.random() * 10);
        TweenMax.fromTo(shape, 0.5 + Math.random(), { x: point.position.x, y: point.position.y }, { scale: 0, x: driftX, y: driftY, ease: Power4.easeOut, rotation: Math.random() * 360, onComplete: function() { _this.stage.removeChild(shape); } });
    };
    return Follower;
}());
var Input = /** @class */ (function() {
    function Input(element) {
        this.mouseEventToCoordinate = function(mouseEvent) {
            mouseEvent.preventDefault();
            return {
                x: mouseEvent.clientX,
                y: mouseEvent.clientY
            };
        };
        this.touchEventToCoordinate = function(touchEvent) {
            touchEvent.preventDefault();
            return {
                x: touchEvent.changedTouches[0].clientX,
                y: touchEvent.changedTouches[0].clientY
            };
        };
        this.mouseDowns = Rx.Observable.fromEvent(element, "mousedown").map(this.mouseEventToCoordinate);
        this.mouseMoves = Rx.Observable.fromEvent(window, "mousemove").map(this.mouseEventToCoordinate);
        this.mouseUps = Rx.Observable.fromEvent(window, "mouseup").map(this.mouseEventToCoordinate);
        this.touchStarts = Rx.Observable.fromEvent(element, "touchstart").map(this.touchEventToCoordinate);
        this.touchMoves = Rx.Observable.fromEvent(element, "touchmove").map(this.touchEventToCoordinate);
        this.touchEnds = Rx.Observable.fromEvent(window, "touchend").map(this.touchEventToCoordinate);
        this.starts = this.mouseDowns.merge(this.touchStarts);
        this.moves = this.mouseMoves.merge(this.touchMoves);
        this.ends = this.mouseUps.merge(this.touchEnds);
    }
    return Input;
}());
var container = document.getElementById('js_mouse_svg_effect');
var app = new App(container);