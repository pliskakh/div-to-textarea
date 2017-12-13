;(function(){
    "use strict";

    var viewBox = document.querySelector('.ba-editor__view'), //div
        textBox = document.querySelector('.ba-editor__text'); // textarea

    textBox.hidden = true;

    document.addEventListener('keydown', function(event){
        console.log(event.keyCode);

        if(event.keyCode == 69 && event.ctrlKey && textBox.hidden){
            event.preventDefault();
            textBox.value = viewBox.innerHTML.trim();
            viewBox.hidden = true;
            textBox.hidden = false;
            textBox.focus();
        }

        if(event.keyCode == 83 && event.ctrlKey && !textBox.hidden){
            event.preventDefault();
            viewBox.innerHTML = textBox.value;
            viewBox.hidden = false;
            textBox.hidden = true;
        }

        if(event.keyCode == 27 && !textBox.hidden){
            event.preventDefault();
            viewBox.hidden = false;
            textBox.hidden = true;
        }
    });
    
})();