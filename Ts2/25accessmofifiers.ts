//public modifier outside class
//private modifier inside class only
// protector in class child

class Users {
  name = ""; // public
  //   private name = "";

  setname(name) {
    this.name = name;
  }

  displayName() {
    console.log(this.name);
    // u1.getLength(); when we make it private
  }

  //    getLength() {
  //     console.log(this.name.length);
  //   }

  private getLength() {
    console.log(this.name.length);
  }
}

const u1 = new Users();

u1.setname("nihal");

// u1.name = "nikhil";

u1.displayName();
u1.getLength();
