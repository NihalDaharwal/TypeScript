"use strict";
// to improve the code quality
// we cam use these options
// got to tsconfig.json
// enable or uncomment these options
// "noUnusedLocals": true,
// "noImplicitReturns": true,
// "noUnusedParameters": true,
// "noFallthroughCasesInSwitch": true,
// "noUnusedLocals": true,
function apple() {
    let item = 10;
    return true;
}
apple();
//  "noUnusedParameters": true,
function apple1(data) {
    // let item = 10;
    // return true;
}
apple1("fruit");
// "noImplicitReturns": true,
function apple3(data) {
    if (data == 20) {
        return true;
    }
    else {
        console.log("else");
    }
}
apple3("fruit");
// "noFallthroughCasesInSwitch": true,
function apple4(data) {
    switch (data) {
        case "fruit":
            console.log("fruit");
        //   break;
        case "color":
            console.log("color");
    }
}
apple4("fruit");
