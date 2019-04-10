document.addEventListener('DOMContentLoaded',function() {

    let cover = document.getElementById('cover');

    window.onload = function() {
        
        if(window.location.hash) {
        
            document.getElementsByClassName('js-top')[0].classList.add('is-narrow');
        
            let src = window.location.hash;
            let obj = document.getElementById( src.slice(1, src.length) );
            
            
            let window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
            let target = window_pos + obj.getBoundingClientRect().top;
            
            setTimeout(function() {
                cutme.Helpers.scrollTo(target, 1, 0);                
            }, 100);            
        }
        
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        cover.remove();
    }
        
}, false);