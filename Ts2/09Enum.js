// a group of constant
// that can assign a number to your string and make a easy comparison
//  syntax  example => enum Role {value}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.MANAGER);
