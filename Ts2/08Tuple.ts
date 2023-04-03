// like array but more advanced than array

// either string or number
let role: string[] | number[] = ["admin", "manager"];

//tuple limits the length

let role1: [string, string, number, number, boolean?] = ["abc", "cde", 1, 2];
//you have to put ? in boolean
role1.push(true);

role1[1] = "user";
