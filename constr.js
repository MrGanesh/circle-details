var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setcolor = function (color) {
        this.color = this.color;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius;
    };
    Circle.prototype.getCircuference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
document.getElementById('btnSubmit').addEventListener('click', function () {
    var radius = parseInt(document.querySelector('#radius').value);
    var color = document.querySelector('#color').value;
    if (color === '' && radius !== undefined) {
        var circle1 = new Circle(2);
        document.querySelector('#constructor').innerHTML = "Single Parameter constructor : Circle(Radius) is called here";
        document.querySelector('#pRadius').innerHTML = 'Radius of Circle is : ' + circle1.getRadius().toString();
        document.querySelector('#pArea').innerHTML = 'Area of Circle is : ' + circle1.getArea().toString();
        document.querySelector('#pCircum').innerHTML = 'Circumference of Circle is : ' + circle1.getCircuference().toString();
    }
    else if (radius !== undefined && color !== '') {
        var circle2 = new Circle(radius, color);
        document.querySelector('#constructor').innerHTML = "Two Parametric constructor : Circle(Radius, Color) is called here";
        document.querySelector('#pRadius').innerHTML = 'Radius of Circle is : ' + circle2.getRadius().toString();
        document.querySelector('#pColor').innerHTML = 'Color of Circle is : ' + circle2.getColor().toString();
        document.querySelector('#pArea').innerHTML = 'Area of Circle is : ' + circle2.getArea().toString();
        document.querySelector('#pCircum').innerHTML = 'Circumference of Circle is : ' + circle2.getCircuference().toString();
    }
    else if (radius === undefined && color === '') {
        var circle3 = new Circle(2, 'white');
        document.querySelector('#constructor').innerHTML = "Default constructor : Circle(2, white) is called here as no explicit values are given";
        document.querySelector('#pRadius').innerHTML = 'Radius of Circle is : ' + circle3.getRadius().toString();
        document.querySelector('#pColor').innerHTML = 'Color of Circle is : ' + circle3.getColor().toString();
        document.querySelector('#pArea').innerHTML = 'Area of Circle is : ' + circle3.getArea().toString();
        document.querySelector('#pCircum').innerHTML = 'Circumference of Circle is : ' + circle3.getCircuference().toString();
    }
});
// let circle1 = new Circle(2, 'red');
// let circle3 = new Circle();
// circle1.color;
// console.log(circle1.getArea());
// circle1.setRadius(10);
// circle1.setcolor
// console.log(circle1.getcolor());
// console.log(circle1.getCircuference());
