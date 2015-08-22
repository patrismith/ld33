end = "You ate the kid!"

function preparse (value) {
  if (!!value) {
    parse(value);
  } else {
    console.log("You has to do a command.");
  }
}

function parse (value) {
  console.log(value);
}
