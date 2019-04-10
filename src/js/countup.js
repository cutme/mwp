import { CountUp } from 'countup.js';
import InView from 'inview';

document.addEventListener('DOMContentLoaded', function() {


    const count = document.getElementsByClassName('js-count');
    
    const init = function() {
        

        const isInView = function(el) {
        	let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        	
        	if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow) {
        		return true;
        	}
        };
        
        const options = {
            duration: 4,
        };
        
        
        for (let i = 0; i < count.length; i++) {
            const inview = InView(count[i], function(isInView) {
                if (isInView) {
    
                    let demo = new CountUp(count[i], count[i].getAttribute('data-count'), options);
        	    
            	    if (!demo.error) {
                        demo.start();
                    } else {
                        console.error(demo.error);
                    }
                    
                    this.destroy();
    
                }
            });
        }
        
    };
    
    
    count.length>0 ? init() : false;



}, false);