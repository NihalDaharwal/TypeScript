//typescript is object oriented javascript
//a class in the term of OOP is a blue print for creating objects

//a class encapsulates data for the objects

//create classes
//use the class keyword to declare a class in typescript

//syntax

class class_name {
  //class scope
}

//a class definition can include the following
// Field:- a field is any variable declared in the class
// Field  represent data related to objects

// constructor :- responsible for allocating memory for the objects of the class

//functions :- functions represents actions an objects can take
//they are also at times  referred to as methods

// the components put together termed as the data member of the class

//cohesive

class youtuber {
  firstname: string;
  lastname: string;
  age: number;

  //in typescript we can only make one constructor
  //use optional ? when not to show error in intense
  //either put whole or don't put optional i shows error
  //make last one optional or followed are optional

  constructor(firstnamme: string, lastname: string, age: number) {
    this.firstname = firstnamme;
    this.lastname = lastname;
    this.age = age;
  }

  //functions refers as methods in class ( when used inside the class)
  getFirstname() {
    //
    console.log(
      "my nameis " + this.firstname + this.lastname + "my age is " + this.age
    );
  }

  //this keyword refers to the current instance of the class
  //here, parameter nama and the name of the class's field  are same
  // hence to avoid  ambiguity ,the class's field is prefixed with this keyword

  getLastname() {
    //
  }
}

//Creating Intense Objects
//To create an instance of the class use the new keyword
// followed by the class name . the syntax for the same ids given below

// syntax
//var object_name = new class_name();

// let ytobj = new youtuber();     //when constructer is user error shows in this line
// ytobj.firstname = "nihal";
// ytobj.lastname = "daharwal";
// ytobj.age = 25;
// ytobj.getFirstname();

//when constructor is used
let ytobj = new youtuber("nihal", "daharwal", 25);
