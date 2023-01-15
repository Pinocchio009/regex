let americanExpress = /^3[4|7]{1}[0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{3}$/.test("34893837474848")

//‘ ^ ‘  is representing the starting of the Pattern.

//‘ 3[4|7]{1} ‘ is representing that the First letter must be 3 and the second letter can be either 4 or 7.

//‘ [0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{3}’ it  represents the rest of the number can be within 0-9.
//‘$’ represents the end of the pattern.
console.log(americanExpress)