
/*
	@author : Yousaf Hassan
*/
'use strict';
// A simple array containing bad words, feel free to modify according to your needs

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BAD_WORDS = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];

var Util = function () {
	function Util() {
		_classCallCheck(this, Util);
	}

	_createClass(Util, null, [{
		key: "replicateChars",
		value: function replicateChars(char, len) {
			return new Array(len + 1).join(char);
		}
	}]);

	return Util;
}();

var PLUGIN_NAME = 'Bad Words Detector';

// Main class that contains all the logic

var BadWordsDetector = function () {
	// Constructor function with option configurations
	function BadWordsDetector() {
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, BadWordsDetector);

		this.config = config;
		// Do everything only if the config is valid
		if (this.validateConfig()) {
			if (this.config.selector.charAt(0) == '#') {
				this.elem = document.getElementById(this.config.selector.slice(1));
			} else if (this.config.selector.charAt(0) == '.') {
				this.elem = document.getElementsByClassName(this.config.selector.slice(1));
			} else {
				this.elem = document.getElementsByTagName(this.config.selector);
			}

			if (!this.elem || this.elem instanceof HTMLCollection && !this.elem.length) {
				console.warn(PLUGIN_NAME + ": Please provide a valid value for 'elem' key in the configurations. Make sure the selector element is present in the DOM");
			} else {
				// All set, lets initialize our plugin
				this.init();
			}
		}
	}

	_createClass(BadWordsDetector, [{
		key: "validateConfig",
		value: function validateConfig() {
			// Check if element is valid and exists on DOM
			var isConfigValidated = true;
			if (!this.config.selector) {
				console.warn(PLUGIN_NAME + ": No selector provided");
				isConfigValidated = false;
			} else if (!this.config.event) {
				console.warn(PLUGIN_NAME + ": No event provided");
				isConfigValidated = false;
			} else if (this.config.replace && !this.config.replacementChar) {
				console.warn(PLUGIN_NAME + ": Replacement character is missing");
				isConfigValidated = false;
			} else if (typeof this.config.handler != 'undefined' && typeof this.config.handler != 'function') {
				console.error(PLUGIN_NAME + ": Invalid callback function");
				isConfigValidated = false;
			} else if (!this.config.replace && !this.config.handler) {
				console.warn(PLUGIN_NAME + ": Either use replacement or a callback handler.");
				isConfigValidated = false;
			}
			return isConfigValidated;
		}
	}, {
		key: "init",
		value: function init() {
			var _this = this;

			// If the selector is not a collection, make it
			this.elem = this.elem instanceof HTMLCollection ? this.elem : [this.elem];
			// Iterate over each selector node to bind event individually
			for (var node = 0; node < this.elem.length; node++) {
				this.elem[node].addEventListener(this.config.event, function (event) {
					var input = event.srcElement.value;
					var sentense = input.split(' ');
					// This flag will help us fire the callback only once on a sentence. 
					var wordFound = false;
					var slangs = [];
					for (var word in sentense) {
						if (BAD_WORDS.indexOf(sentense[word]) >= 0) {
							wordFound = true;
							slangs.push(sentense[word]);
							// If bad words need replacement
							if (_this.config.replace) {
								sentense[word] = Util.replicateChars(_this.config.replacementChar, sentense[word].length);
							}
						}
					}
					if (wordFound) {
						if (_this.config.replace) {
							event.srcElement.value = sentense.join(' ');
						}
						if (typeof _this.config.handler === 'function') {
							// Lets call the user desired callback function
							_this.config.handler(event.srcElement, slangs);
						}
					}
				});
			}
		}
	}]);

	return BadWordsDetector;
}();