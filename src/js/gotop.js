import ScrollToPlugin from 'gsap/ScrollToPlugin';

document.addEventListener('DOMContentLoaded',function() {

    const gotop = document.getElementsByClassName('js-gotop')[0];

   
    const init = function() {
    
        // Monitor position
        
        let scroll_pos = window.pageYOffset || window.scrollY,
            status = false;
    
        const showElement = function() {
            scroll_pos = window.pageYOffset || window.scrollY;
            
            if (scroll_pos > 200) {
                if (status === false) {
                      gotop.classList.add('is-visible');
                    status = true;
                }
            } else {
                if (status === true) {
                
                    gotop.classList.remove('is-visible');
                    status = false;
                }
            }
        }
        
       window.addEventListener('scroll', showElement);


       // Fire action

       const scrollUp = function(e) {
           cutme.Helpers.scrollTo(0, .5, 0);
           e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
       }

       gotop.addEventListener('click', scrollUp);

	};



    gotop ? init() : false;
    
    
}, false);
