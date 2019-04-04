// Homework - wk1 d34 - whodunnit - predict O/P or err & reason
// episode 1
    // const scenario = {
    //   murderer: 'Miss Scarlet',
    //   room: 'Library',
    //   weapon: 'Rope'
    // };
    //
    // const declareMurderer = function() {
    //   return `The murderer is ${scenario.murderer}.`;
    // }
    //
    // const verdict = declareMurderer();
    // console.log(verdict);
// O/P = The murderer is Miss Scarlet
// No variables declared within function - scenario is global
// episode 2
    // const murderer = 'Professor Plum';
    //
    // const changeMurderer = function() {
    //   murderer = 'Mrs. Peacock';
    // }
    //
    // const declareMurderer = function() {
    //   return `The murderer is ${murderer}.`;
    // }
    //
    // changeMurderer();
    // const verdict = declareMurderer();
    // console.log(verdict);
// O/P = error
// attempt to reassign constant
// episode 3
    // let murderer = 'Professor Plum';
    //
    // const declareMurderer = function() {
    //   let murderer = 'Mrs. Peacock';
    //   return `The murderer is ${murderer}.`;
    // }
    //
    // const firstVerdict = declareMurderer();
    // console.log('First Verdict: ', firstVerdict);
    //
    // const secondVerdict = `The murderer is ${murderer}.`;
    // console.log('Second Verdict: ', secondVerdict);
// O/P = verdict 1 is peacock, verdict 2 is plum
// 2 variables, global & local, with the same name - func changes local only
// episode 4
    // let suspectOne = 'Miss Scarlet';
    // let suspectTwo = 'Professor Plum';
    // let suspectThree = 'Mrs. Peacock';
    //
    // const declareAllSuspects = function() {
    //   let suspectThree = 'Colonel Mustard';
    //   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
    // }
    //
    // const suspects = declareAllSuspects();
    // console.log(suspects);
    // console.log(`Suspect three is ${suspectThree}.`);
// O/P = lists scarlet, plum, mustard, then s3 is peacock
// s3 changes only locally within func
// episode 5
    // const scenario = {
    //   murderer: 'Miss Scarlet',
    //   room: 'Kitchen',
    //   weapon: 'Candle Stick'
    // };
    //
    // const changeWeapon = function(newWeapon) {
    //   scenario.weapon = newWeapon;
    // }
    //
    // const declareWeapon = function() {
    //   return `The weapon is the ${scenario.weapon}.`;
    // }
    //
    // changeWeapon('Revolver');
    // const verdict = declareWeapon();
    // console.log(verdict);
// O/P = The weapon is the Revolver
// mutable global const CAN be changed by function
// episode 6
    // let murderer = 'Colonel Mustard';
    //
    // const changeMurderer = function() {
    //   murderer = 'Mr. Green';
    //
    //   const plotTwist = function() {
    //     murderer = 'Mrs. White';
    //   }
    //
    //   plotTwist();
    // }
    //
    // const declareMurderer = function () {
    //   return `The murderer is ${murderer}.`;
    // }
    //
    // changeMurderer();
    // const verdict = declareMurderer();
    // console.log(verdict);
// O/P = The murderer is Mrs. White
// gllobal variables can be amended from within a function
// episode 7
    // let murderer = 'Professor Plum';
    //
    // const changeMurderer = function() {
    //   murderer = 'Mr. Green';
    //
    //   const plotTwist = function() {
    //     let murderer = 'Colonel Mustard';
    //
    //     const unexpectedOutcome = function() {
    //       murderer = 'Miss Scarlet';
    //     }
    //
    //     unexpectedOutcome();
    //   }
    //
    //   plotTwist();
    // }
    //
    // const declareMurderer = function() {
    //   return `The murderer is ${murderer}.`;
    // }
    //
    // changeMurderer();
    // const verdict = declareMurderer();
    // console.log(verdict);
// O/P = The murderer is Mr. Green
// global var amended in func, then local var declared & amended
// episode 8
    // const scenario = {
    //   murderer: 'Mrs. Peacock',
    //   room: 'Conservatory',
    //   weapon: 'Lead Pipe'
    // };
    //
    // const changeScenario = function() {
    //   scenario.murderer = 'Mrs. Peacock';
    //   scenario.room = 'Dining Room';
    //
    //   const plotTwist = function(room) {
    //     if (scenario.room === room) {
    //       scenario.murderer = 'Colonel Mustard';
    //     }
    //
    //     const unexpectedOutcome = function(murderer) {
    //       if (scenario.murderer === murderer) {
    //         scenario.weapon = 'Candle Stick';
    //       }
    //     }
    //
    //     unexpectedOutcome('Colonel Mustard');
    //   }
    //
    //   plotTwist('Dining Room');
    // }
    //
    // const declareWeapon = function() {
    //   return `The weapon is ${scenario.weapon}.`
    // }
    //
    // changeScenario();
    // const verdict = declareWeapon();
    // console.log(verdict);
// O/P = The weapon is Candle Stick
// all valid, just a bit convoluted
// episode 9
    let murderer = 'Professor Plum';

    if (murderer === 'Professor Plum') {
      let murderer = 'Mrs. Peacock';
    }

    const declareMurderer = function() {
      return `The murderer is ${murderer}.`;
    }

    const verdict = declareMurderer();
    console.log(verdict);
// O/P = The murderer is Professor Plum
// 2nd declaration local to code block in if statement
