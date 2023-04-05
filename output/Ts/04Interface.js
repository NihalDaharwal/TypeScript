"use strict";
// inline type annotation
let namets = (firstname, lastname) => {
    console.log(firstname);
    console.log(lastname);
};
namets("nihal", "daharwal");
//encaspuation // make an objects
let namets1 = (namepro) => {
    console.log(namepro.firstname);
    console.log(namepro.lastname);
};
namets1({
    firstname: "nihal",
    lastname: "daharwal",
});
//in ts in inline type annotation
let namets2 = (namepro) => {
    console.log(namepro.firstname);
    console.log(namepro.lastname);
};
namets2({
    firstname: "nihal",
    lastname: "daharwal",
});
let namets3 = (namepro1) => {
    console.log(namepro1.firstname);
    console.log(namepro1.lastname);
};
namets3({
    firstname: "nihal",
    lastname: "daharwal",
    age: 0,
    address: "",
});
