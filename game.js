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
  },
  'stand': {
    'up': [
      "You stand up and eat the kid!"
    ],
    'down': [
      "You and the kid face off against each other on a vast plain in the middle of Colorado, circa 1886. \"The town won't be bullied around any more, Kid,\" you say sternly. The kid's face crumples into a snarl, its animal lust for money and bloodright clawing right into your eyes. \"Shut it, freak!\" spits the child of Gaia, and it swings its paw up, about to depress the trigger, but pauses, a pregnant silence, giving birth (as bloody as one ever is) to the reality that the kid is dead, victim to your powerful bullet of justice. You eat the kid!"
      ]
  }
};

function preparse (value) {
  if (!!value) {
    parse(value);
  } else {
    say("You blink. Suddenly, you're knee deep in kid guts and your hangover is indescribable. It seems that you've eaten the kid. How'd that happen??");
  }
}

function parse (value) {
  //if (value.toLowerCase() === "eat kid") {
  //  feedback.innerHTML = "You ate the kid!"
  //}
  var parsed = value.split(' ');
  var verb = parsed[0];
  if (dict[verb]) {
    var subject = parsed[1];
    if (dict[verb][subject]) {
      say(dict[verb][subject]);
    }
  } else if (verb == "help") {
    say("You realize, in the moment before you succumb to child-eating frenzy, that there are two rules that control your reality: 1. The only legitimate commands consist of <VERB> <SUBJECT>. 2. You are forever condemned to repeat a limited series of actions. Sweet forgetfulness takes hold again, and you proceed to your destiny. You ate the kid!");
  } else {
    say("You tried to perform an action that is impossible in the universe that is this game. Perhaps you should look at the source?");
  }
}

function say (value) {
  feedback.innerHTML = value;
}
