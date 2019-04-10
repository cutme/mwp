import ScrollToPlugin from 'gsap/ScrollToPlugin';
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const btn = document.getElementsByClassName('js-goto');
    
    const hamburger = document.getElementsByClassName('js-hamburger')[0];
    const nav = document.getElementsByClassName('js-nav')[0];

	const speed_calculate = function (target) {
    	let base_speed  = 60,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};
	
	const hideMenu = function() {
            
        enableBodyScroll(nav);
        nav.classList.remove('is-visible');
        hamburger.classList.remove('is-active');
        
    };
    
	const clickAction = function(e) {
	
	    const that = e.currentTarget;

	    let src = that.getAttribute('href');
	    
	    if (!src) {
	    
	        src = that.getElementsByTagName('a')[0].getAttribute('href');
        } 

	    const window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

	    const obj = document.getElementById( src.slice(1, src.length) );

	    if (obj) {
	        let offset = that.getAttribute('data-offset');

            if (!offset) {
                offset = 0;
            }
            
            document.body.removeAttribute('style');
	    
	        let target = window_pos + obj.getBoundingClientRect().top - offset;
	        cutme.Helpers.scrollTo(target, speed_calculate(target), offset);
	    }
	    
	    for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('current-menu-item');
        }
        
        that.classList.add('current-menu-item');
        
        if (nav.classList.contains('is-visible')) {
            hideMenu();
        }
        
        
        if (window.e) {
            window.e.returnValue = false;
        }
        
	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};
	
    if (btn.length > 0) {
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', clickAction);
        }
    }

    
}, false);
