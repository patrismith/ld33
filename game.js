end = "You ate the kid!"

function preparse (value) {
  if (!!value) {
    parse(value);
  } else {
    console.log("You has to do a command.");
  }
}

function parse (value) {
  if (value.toLowerCase() === "eat kid") {
    feedback.innerHTML = "You ate the kid!"
  }
}
