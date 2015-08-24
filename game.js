var commonanswers = {
  'lookkid': "You look at the kid. Suddenly, you can't help yourself! You eat the kid!",
  'eatkid': "You ate the kid!",
  'looklight': "You stare at the light. Just an ordinary light. Or is it? You eat the kid!",
  'lookself': "You look at yourself. You are the kid. There is no monster, and you are 46 years old. The kid is your kid. You are the child's future son. (You are the child's future self.) You are Father Time, and you always eat the kid."
}

var dict = {
  'eat': {
    'kid': commonanswers['eatkid'],
    'boy': commonanswers['eatkid'],
    'girl': commonanswers['eatkid'],
    'person': commonanswers['eatkid'],
    'human': commonanswers['eatkid'],
    'child': commonanswers['eatkid'],
    'bed': [
      "You swallow the entire bed, and the kid in the process."
    ]
  },
  'look': {
    'kid': commonanswers['lookkid'],
    'bed': [
      "You look at the bed. That reminds you that there is a kid in the bed."+
        " You eat the kid!"
    ],
    'floorboards': [
      "The floorboards are dusty and a little warped. Suddenly, they creak. The kid is trying to flee! You quickly eat him before your cover is blown."
    ],
    'hallway': [
      "You peer into the hallway. Just your average indoor terrain feature. As you peer, the hallway darkens with the shadow of the child's parent. The parent looks at you, and smiles. \"Do we have a deal, monster? I hand over the child, and in exchange...\" the parent rubs their hands \"unimaginable power!\" Ah, these humans, you think as you eat the kid. Sabotaging their own future for temporary omnipotence. It's like a parable."
    ],
    'self': commonanswers['lookself'],
    'boy': commonanswers['lookkid'],
    'girl': commonanswers['lookkid'],
    'person': commonanswers['lookkid'],
    'human': commonanswers['lookkid'],
    'child': commonanswers['lookkid'],
    'glare': commonanswers['looklight'],
    'light': commonanswers['looklight'],
  },
  'stand': {
    'up': [
      "You stand up, knocking over the bed, and eat the kid!"
    ],
    'down': [
      "You and the kid face off against each other on a vast plain in the middle of Colorado, circa 1886. \"The town won't be bullied around any more, Kid,\" you say sternly. The kid's face crumples into a snarl, its animal lust for money and bloodright clawing right into your eyes. \"Shut it, freak!\" spits the child of Gaia, and it swings its paw up, about to depress the trigger, but pauses, a pregnant silence, giving bloody birth to the reality that the kid is dead, victim to your powerful bullet of justice. You eat the kid!"
    ]
  }
};

function handle(e) {
  if (e.keyCode === 13) {
    preparse();
  }
  return false;
}

function preparse () {
  if (!!command.value) {
    console.log('preparse passed');
    parse(command.value);
  } else {
    console.log('preparse failed');
    say("You blink. Suddenly, you're knee deep in kid guts and your hangover is indescribable. It seems that you've eaten the kid. How'd that happen??");
    showRestart();
  }
  return false;
}

function parse (value) {
  var parsed = value.split(' ');
  var verb = parsed[0];
  console.log('');
  if (dict[verb]) {
    console.log('verb found: ' + verb);
    var subject = parsed[1];
    if (dict[verb][subject]) {
      console.log('subject found: ' + subject);
      say(dict[verb][subject]);
      showRestart();
    } else {
      console.log('subject not found: ' + subject);
      say('You want to do ' + verb + 'ing to WHAT??');
    }
  } else if (verb == "help") {
    console.log('entering help');
    say("You realize, in the moment before you succumb to child-eating frenzy, that there are two rules that control your reality: 1. The only legitimate commands consist of &lt;VERB&gt; &lt;SUBJECT&gt;. 2. You are forever condemned to repeat a limited series of actions. Sweet forgetfulness takes hold again, and you proceed to your destiny. You ate the kid!");
    showRestart();
  } else if (verb == "get") {
    say("There's a lot you can't do in this game, and getting things is one of them.");
  } else {
    console.log('nothing applied');
    say("You tried to perform an action that is impossible in the universe that is this game.");
  }
}

function showRestart () {
  command.hidden = true;
  go.hidden = true;
  restart.hidden = false;
  incrementTurnsPlayed();
};

function restartit () {
  restart.hidden = true;
  command.hidden = false;
  go.hidden = false;
  say("What will you do? Write your command in the box below and press the \"go!\" button.");
  command.value = "";
}

function say (value) {
  console.log('saying value');
  feedback.innerHTML = value;
}

function endit (value) {
  console.log('displaying ending');
  ending.innerHTML = value;
}

function incrementTurnsPlayed() {
  turnsPlayedCounter += 1;
  turnsPlayed.innerHTML = "Turns played: " + turnsPlayedCounter;
}
