// Sets variables
var code = 0;
var mkey = "UcdDjbxUtgVk9mduLqVVAeXX4JLWVf";
var isLocked = 0;

// Allows you to type 'lock("<key goes here>");' without getting an error.
function lock(key) {
  // Sets the key you specified to a variable.
  code = key;
  // Safety
  if (code == null) {
    console.log("[Lockout] This key is invalid. You may not have null as your key as it would not allow anyone to unlock it.");
  } else {
    // Pops up the box and tells you your browser is locked.
    console.log("[Lockout] This browser is now locked.");
    isLocked = 1;
    var p2 = prompt("This browser is now locked.\nTo unlock your browser, please type the correct key below.\n\nhttp://lockoutjs.glitch.me/");
    // Key checking code
    if (p2 == key) {
      // If key is put in, then unlock.
      console.log("[Lockout] This browser is now unlocked.");
      isLocked = 0;
      return true;
    } else if (p2 == mkey){
      // If the master key is put in, then unlock.
      console.log("[Lockout] This browser is now unlocked.");
      isLocked = 0;
      return true;
    } else {
      // If wrong key put in, then 
      console.log("[Lockout] Someone attempted to unlock this browser.");
      fLock(code);
    }
  }
}

// Executes if a wrong key was put in the box.
// They are very similar in functionality, so they look alike.
function fLock(key) {
  // Sets key as a variable
  code = key;
  // Safety
  if (code == null) {
    console.log("[Lockout] This key is invalid. You may not have null as your key as it would not allow anyone to unlock it.");
  } else {
    // Says if it is an incorrect key.
    var p3 = prompt("Incorrect Key!\nTo unlock your browser, please type the correct key below.\n\nhttp://lockoutjs.glitch.me/");
    isLocked = 1;
    // Key checking.
    if (p3 == key) {
      // If key is correct, then unlock.
      console.log("[Lockout] This browser is now unlocked.");
      isLocked = 0;
      return true;
    } else if (p3 == mkey){
      // If master key is sent, then unlock.
      console.log("[Lockout] This browser is now unlocked.");
      isLocked = 0;
      return true;
    } else {
      // If key is wrong, then repeat process.
      console.log("[Lockout] Someone attempted to unlock this browser.");
      fLock(code);
    }
  }
}
