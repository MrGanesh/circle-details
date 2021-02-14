
class Circle{
    radius : number;
    color : string;
    constructor(radius ?: number, color?:string){
        this.radius = radius;
        this.color = color
    }

    getRadius() : number{
        return this.radius;
    }
    setRadius(radius:number) : void{
        this.radius = radius;
    }
    getColor() : string{     
        return this.color;
    }
    setcolor(color?: number) : void{
        this.color = this.color
    }
    getArea() : number{
        return Math.PI * this.radius
    }
    getCircuference() : number{
        return 2* Math.PI * this.radius
    }
}


document.getElementById('btnSubmit').addEventListener('click', ()=>{
    let radius :number = parseInt((<HTMLInputElement><unknown> document.querySelector('#radius')).value);
    let color :string = (<HTMLInputElement><unknown> document.querySelector('#color')).value;

    if(color === '' && radius !== undefined){
        let circle1 = new Circle(2);
        (<HTMLParagraphElement>document.querySelector('#constructor')).innerHTML =  "Single Parameter constructor : Circle(Radius) is called here";
        (<HTMLParagraphElement>document.querySelector('#pRadius')).innerHTML = 'Radius of Circle is : ' + circle1.getRadius().toString();
        (<HTMLParagraphElement>document.querySelector('#pArea')).innerHTML = 'Area of Circle is : ' + circle1.getArea().toString();
        (<HTMLParagraphElement>document.querySelector('#pCircum')).innerHTML ='Circumference of Circle is : ' + circle1.getCircuference().toString();    
    }
    else if(radius !== undefined && color !== ''){
        let circle2 = new Circle(radius, color);
     (<HTMLParagraphElement>document.querySelector('#constructor')).innerHTML =  "Two Parametric constructor : Circle(Radius, Color) is called here";
     (<HTMLParagraphElement>document.querySelector('#pRadius')).innerHTML = 'Radius of Circle is : ' + circle2.getRadius().toString();
     (<HTMLParagraphElement>document.querySelector('#pColor')).innerHTML = 'Color of Circle is : ' + circle2.getColor().toString();
     (<HTMLParagraphElement>document.querySelector('#pArea')).innerHTML = 'Area of Circle is : ' + circle2.getArea().toString();
     (<HTMLParagraphElement>document.querySelector('#pCircum')).innerHTML = 'Circumference of Circle is : ' + circle2.getCircuference().toString();
    }
    else if(radius === undefined && color === ''){
        let circle3 = new Circle(2, 'white');
     (<HTMLParagraphElement>document.querySelector('#constructor')).innerHTML =  "Default constructor : Circle(2, white) is called here as no explicit values are given";
     (<HTMLParagraphElement>document.querySelector('#pRadius')).innerHTML =  'Radius of Circle is : ' + circle3.getRadius().toString();
     (<HTMLParagraphElement>document.querySelector('#pColor')).innerHTML = 'Color of Circle is : ' + circle3.getColor().toString();
     (<HTMLParagraphElement>document.querySelector('#pArea')).innerHTML = 'Area of Circle is : ' + circle3.getArea().toString();
     (<HTMLParagraphElement>document.querySelector('#pCircum')).innerHTML = 'Circumference of Circle is : ' + circle3.getCircuference().toString();
    }
})



// let circle1 = new Circle(2, 'red');

// let circle3 = new Circle();
// circle1.color;

// console.log(circle1.getArea());

// circle1.setRadius(10);
// circle1.setcolor

// console.log(circle1.getcolor());

// console.log(circle1.getCircuference());



