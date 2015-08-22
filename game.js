var dict = {
  'eat': {
    'kid': [
      "You ate the kid!"
    ],
    'bed': [
      "You swallow the entire bed, and the kid in the process."
    ]
  },
  'look': {
    'kid': [
      "You look at the kid. Suddenly, you can't help yourself! You eat the kid!"
    ],
    'bed': [
      "You look at the bed. That reminds you that there is a kid in the bed."+
        " You eat the kid!"
    ]
  }
};

function preparse (value) {
  if (!!value) {
    parse(value);
  } else {
    say("You blink. Suddenly, you're knee deep in kid guts and your hangover is undescribable. It seems that you've eaten the kid. How'd that happen??");
  }
}

function parse (value) {
  //if (value.toLowerCase() === "eat kid") {
  //  feedback.innerHTML = "You ate the kid!"
  //}
  var parsed = value.split(' ');
  var verb = parsed[0];
  if (dict[verb]) {
    say("verb is found");
  } else {
    say("You tried to perform an action that is impossible in the universe that is this game. Perhaps you should look at the source?");
  }
}

function say (value) {
  feedback.innerHTML = value;
}
