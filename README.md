LockoutJS
======
##### A tool to "lock out" a webpage.
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)]() [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)]()

Introduction
------
Hello! My name is Brendan, and I created a piece of software that allows you to stop all actions on a website until you enter a key.
This was used by me a couple times during 7th grade (which is when I made it) to stop people from messing with my projects while I was in the restroom.

Continue scrolling to learn more.

Table of Contents
------
+ [Terms and Conditions]()
+ [License]()
+ [Installation]()
+ [FAQ]()
+ [Contributors]()

Terms And Conditions
------
To view the terms and conditions, please [click here]().

License
------
[![forthebadge](https://forthebadge.com/images/badges/cc-by.svg)]() [![forthebadge](https://forthebadge.com/images/badges/cc-nc.svg)]()

We use a Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license.
If you need the human-readable version, [click here](https://creativecommons.org/licenses/by-nc/4.0/).
If you need the legalcode version, [click here](https://gitlab.com/toystoryalien-vault/lockoutjs/blob/master/LICENSE).

Installation
------
1. Open the developer tools (Windows/Linux/ChromeOS: Ctrl + Shift + I or Mac: Cmd + Shift + I) and go to the Console tab.
2. Copy the code below into the console (**Tip:** You have to use Ctrl + V or Cmd + V)
```javascript
var code=0;var mkey="UcdDjbxUtgVk9mduLqVVAeXX4JLWVf";var isLocked=0;function lock(key){code=key;if(code==null){console.log("[Lockout] This key is invalid. You may not have null as your key as it would not allow anyone to unlock it.")}else{console.log("[Lockout] This browser is now locked.");isLocked=1;var p2=prompt("This browser is now locked.\nTo unlock your browser, please type the correct key below.\n\nhttp://lockoutjs.glitch.me/");if(p2==key){console.log("[Lockout] This browser is now unlocked.");isLocked=0;return true}else if(p2==mkey){console.log("[Lockout] This browser is now unlocked.");isLocked=0;return true}else{console.log("[Lockout] Someone attempted to unlock this browser.");fLock(code)}}}function fLock(key){code=key;if(code==null){console.log("[Lockout] This key is invalid. You may not have null as your key as it would not allow anyone to unlock it.")}else{var p3=prompt("Incorrect Key!\nTo unlock your browser, please type the correct key below.\n\nhttp://lockoutjs.glitch.me/");isLocked=1;if(p3==key){console.log("[Lockout] This browser is now unlocked.");isLocked=0;return true}else if(p3==mkey){console.log("[Lockout] This browser is now unlocked.");isLocked=0;return true}else{console.log("[Lockout] Someone attempted to unlock this browser.");fLock(code)}}}
```
3. Hit enter, then right click and click 'Clear Console'.
4. Type `lock("<put key here>");`. Remember: You have to replace `<lock key here>` with the key you want to use.
###### You are now done.
To unlock, just type the key you put in.

FAQ
------
**All questions are in the format of _Question | Answer_.**
+ Is this project going to be updated in the future? | No, as I am working on other projects, and trying to balance time in school (make sure I have studied, done homework, etc.) this project will not be updated. Maybe if there is a crutial flaw, I will come an update it, but until then, no.
+ Can I contribute to the project? | Yes, that is why this project was filed as completed for me, but not archived. I will review all merge requests for this project. If it gets too complicated I might make a wiki for it. You will also be featured in the contributors section.
+ What happens if I forget my key? | There is a master key that can be used. It is `UcdDjbxUtgVk9mduLqVVAeXX4JLWVf`.
+ Is this secure? | No, this is not secure. It is very weak, as I designed it around the average JS knowlege of my school. It can be easily broken, so do not complain when someone breaks it. It is ment to be a wood fence, not an unbreakable box.

Contributors
------
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)]()

+ [Brendan Lane](http://gitlab.com/ToyStoryAlien) | Main Developer

***Other Credits:***
+ [For The Badge](http://forthebadge.com) made the badges.