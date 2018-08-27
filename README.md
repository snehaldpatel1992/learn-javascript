JS History 

    First introduced in 1996
    The ECMA International Standards body defines the specification
    ECMAScript, or simply ES, followed by the version number of the standard, for example, ES5 or ES6
    Not every feature of that standard is immediately available in all browser platforms.
    Most browsers today support ES5 specification

Primitive types in JS

    undefined
    string
    number
    boolean
    null

Function in JS 

    Named function 
    Anonymous function 
    Immediately Invoked function expression IIFE


Scope in JS 

    local scope
    global scope
    
Objects in JS 

    Object literal 
    Object Constructor

Multiple instance of Object 

    function Person(name){
       this.name = name;
       this.sayName = function() {
    	console.log('My name is '+ this.name)
       }
    }
    
    var person1 = new Person('John');
    person1.sayName();
    
    var person2 = new Person('Adam');
    person2.sayName();


Concept of prototype

    function Person(name){
       this.name = name;
    }
    Person.prototype.sayName = function() {
        console.log('My name is '+ this.name)
    }


ES6 syntactic sugar for prototype

    //ES6
    class Person {
        name;
        constructor( name) {
            this.name = name;
        }
        sayName(){
           return this.name;
        }
    }
    
    // ES5
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.sayName = function (){
            return this.name;
        };
        return Person;
    }());


Inheritance 

    function Student(name){
       this.name = name;
       this.shoutName = function (){
            console.log('My name is '+ this.name + '!');
        }
    }
    Student.prototype  = new Person();
    var john = new Student('John');


ES6  syntactic sugar for inheritance


    class Person {
        constructor(name){
            this.name = name;
        }
        sayName(){
            console.log('My name is '+ this.name);
        }
    }
    
    class Student extends Person {
        constructor(name) { 
            super(name);
        }
        shoutName(){
            console.log('My name is '+ this.name + '!');
        }
    }


Jquery vs AngularJS
    
    Jquery is lightweight library gives to good syntax for DOM manipulation
    AngularJS on other hand is full framework comes with declrative directives that performs DOM manipulation for you 



    


