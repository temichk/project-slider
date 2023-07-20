var showButton = document.querySelector('.show-all');
var closeButton = document.querySelector('.close-all');
var gallery = document.querySelector('.service-gallery')
var allServiceButtons = gallery.children;

showButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    showAll();
});

closeButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    closeAll();
})

function showAll() {

    
    // add check if display none, then display block. 
    // for (var i = 0; i < allServiceButtons.length; i++){
    //     allServiceButtons[i].style.display = 'none';
        
        
    //     //  if (allServiceButtons[i].style.display === 'none') {
    //     //     console.log('find')
    //     //     // allServiceButtons[i].style.display = 'block';
    //     // }
    // }
    showButton.style.display = "none";
    closeButton.style.display = "block";
    gallery.style.height = "100%";
}

function closeAll() {
    // add check if display block
    // add function that remember all previous settings of display
    showButton.style.display = "block";
    closeButton.style.display = "none";
    gallery.style.height = "180px";
}