// class is user- defined type that describes what a certain type of object?
//we can define  property and methods in class

// standard
// for example  we can't class shivam because shivam is name and it is subject not object
// so we can object like user so class user is perfect

// class fruit not class apple

// class name can be small but
// class name should be capital for standard purpose

class Users {
  name: "";
  email: "";

  addUser(user) {
    return `${user} is Added`;
  }
  removeUser(user) {
    console.log(`${user} is Removed`);
  }
}

let User1 = new Users();
let result = User1.addUser("nihal");
User1.addUser("nihal");
User1.removeUser("nik");
console.log(result);
