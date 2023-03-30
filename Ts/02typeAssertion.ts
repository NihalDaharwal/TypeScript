// type assertion
// tA has two forms
// one is "angle bracket" syntax : (<type>variablename)
// the other form is as-syntax

//1st
// angle bracket

let nihal;
nihal = " superstar";
(<string>nihal).length;

//2nd
(nihal as string).length;
