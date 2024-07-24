if (true) {
  var test = true; // используем var вместо let
}

alert(test); // true, переменная существует вне блока if

if (true) {
  let test = true; // используем let
}

alert(test); // Error: test is not defined
