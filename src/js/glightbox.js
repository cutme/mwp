import GLightbox from 'glightbox';
require('../../node_modules/glightbox/dist/css/glightbox.css');

document.addEventListener('DOMContentLoaded', function() {
    
    
    if (document.getElementsByClassName('js-image').length > 0) {
    
        let image = GLightbox({
            selector: 'js-image',
            touchNavigation: true
        });
    }


}, false);
