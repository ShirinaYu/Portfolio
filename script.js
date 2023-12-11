let introContainer = document.getElementById('intro-container');
let homepageContainer = document.getElementById('homepage');

document.addEventListener('mousemove', function () {
    if (introContainer.style.display !== 'none') {
        introContainer.style.opacity = 0;

        setTimeout(function () {
            introContainer.style.display = 'none';
            homepageContainer.style.display = 'flex';
            setTimeout(function () {
                homepageContainer.style.opacity = 1;
            }, 100); 
        }, 1000); 
    }
});

function toggleNav() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("collapsed");
}
