const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementsByClassName('js-hamburger')[0];
    
    const init = function() {
    
        let ww = window.innerWidth;
        
        const checkWindowWidth = function() {
            ww = window.innerWidth;
            
            if (ww > 768) {
                hideMenu();
            }
        };
    
        const nav = document.getElementsByClassName('js-nav')[0],
              li = nav.getElementsByTagName('li');  
        
        const hideMenu = function() {
            
            enableBodyScroll(nav);
            nav.classList.remove('is-visible');
            el.classList.remove('is-active');
            
        }
    
        const showMenu = function(e) {  

            // Menu is open
            if (e.currentTarget.classList.contains('is-active')) {
                
                hideMenu();
                
            } else {
                
                disableBodyScroll(nav);
                nav.classList.add('is-visible');
                el.classList.add('is-active');
                
            }

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }

        el.addEventListener('click', showMenu);
     
     
        // Hide menu on ESC
        
        document.addEventListener('keydown', function(evt) {
           // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });

       
        window.addEventListener('resize', checkWindowWidth);
    }
    
    el ? init() : false;
    
    
    
}, false);
