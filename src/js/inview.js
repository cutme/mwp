import InView from 'inview';

document.addEventListener('DOMContentLoaded',function() {
            
    const el = document.getElementsByClassName('anim');
    
    const init = function() {
        for (let i = 0; i < el.length; i++) {
            const inview = InView(el[i], function(isInView) {
                if (isInView) {
    
                    el[i].classList.add('anim--visible');
                    this.destroy();
    
                }
            });
        }
    };
    
	
	el ? init() : false;

}, false);
