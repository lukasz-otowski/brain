window.onload = function () {
    let button = document.querySelector(".langButton");
    
    button.addEventListener('click', function () {
            let lang = document.querySelectorAll('.langPL');
            
            for(i=0; i<lang.length; i++){
        
                if(lang[i].style.display != 'none'){
                    lang[i].style.display = 'none';
                    console.log("Polish language off");
                }else{
                    lang[i].style.display = 'initial';
                    console.log("Polish language on");
                }
            }
        });
}
