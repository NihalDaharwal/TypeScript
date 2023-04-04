// unknown type

// any is used ts is disable its power
let data: any;
data = 20;
data = "hello";

let item: string;
item = data;

//unknown is used
let data1: unknown;
data1 = 20;
data1 = "hello";

let item1: string;
// item = data1; // will show error

//use unknown instead of any

let data2: unknown;
data1 = 20;
data1 = "hello";

let item2: string;

if (typeof data2 === "string") {
  item2 = data2;
}
