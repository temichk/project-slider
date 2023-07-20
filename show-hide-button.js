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
    showButton.style.display = "none";
    closeButton.style.display = "block";
    gallery.style.height = "100%";
}

function closeAll() {
    showButton.style.display = "block";
    closeButton.style.display = "none";
    gallery.style.height = "180px";
}
