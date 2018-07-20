# Bad Words Detector
This super light weight plugin is intended to be used on user input fields to detect bad words, have a callback or silence those words.

## Dependency
This plugin is written in native `JS` code so it does not have any dependency (not even `jquery`) 

## Quick Start
1. Include the script file
```html
<script src="/path/to/bad-words-detector.min.js"></script>
```
2. Create an element for which you want to restrict bad words
```html
<input type="text" class="noble-input" />
```
3. Init the plugin
```javascript
new BadWordsDetector({
  selector          : '.noble-input', // target element for bad words detection
  event 	    : 'blur',
  replace           : true,
  replacementChar   : '*' // relace bad words with `*` characters
});
```
That's it. You have set the bad words silencer on input on the fields having class `noble-input`

### Configurations

| Key           | Description  |
| ------------- |:-----|
| selector        |`(string)` id, class or tagname of the element(s) for which you want to enable bad words detection|
| event           |`(string)` event name on which the detector should be triggered. All the JS events are supported|
| replace         |`(boolean)` if set to true, there must be a `replacementChar` as well to aid bad words replacement|
| replacementChar |`(string)/(char)` a single character that will be replaced with all bad word characters|
| handler         |`(function)` optional callback function that needs to be executed whenever a bad word is detected in accordance with the desired `event`|

### Contribution
Missing your desired slangs? Please submit a pull request or contact me for slang list updation.

### Contact me
If you have any questions or ideas about plugin, please feel free to contact me: <a href="mailto:usafhassan@gmail.com">usafhassan@gmail.com</a>
