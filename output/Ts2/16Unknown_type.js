"use strict";
// unknown type
// any is used ts is disable its power
let data;
data = 20;
data = "hello";
let item;
item = data;
//unknown is used
let data1;
data1 = 20;
data1 = "hello";
let item1;
// item = data1; // will show error
//use unknown instead of any
let data2;
data1 = 20;
data1 = "hello";
let item2;
if (typeof data2 === "string") {
    item2 = data2;
}
