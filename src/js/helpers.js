import ScrollToPlugin from 'gsap/ScrollToPlugin';

const plugins = [ ScrollToPlugin ];

(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	setInputFilter: setInputFilter,
        	scrollTo: scrollTo
        };
    };
    
       
    // Restricts input for the given textbox to the given inputFilter.
    const setInputFilter = function(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            textbox.addEventListener(event, function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        });
    };
    
    const scrollTo = function (target, speed, offset) {    
		TweenLite.to(window, speed, {
			scrollTo: {
				y: target - 60,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};

    cutme.Helpers = new Helpers();


    
    // Filter inputs
    
    (function() {
    
        const digits = document.getElementsByClassName('js-digits');

        const digitsOnly = function() {
            for (let i = 0; i < digits.length; i ++) {
                setInputFilter(digits[i], function(value) {
                    return /^\d*\.?\d*$/.test(value);
                });
            }
        };

        digits ? digitsOnly() : false;
    
    })();
    

}(window, document, window.cutme = window.cutme  || {}));