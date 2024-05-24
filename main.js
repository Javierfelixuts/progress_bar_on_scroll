const progress = document.getElementById('progress');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.clientHeight;

    let scrolled = (scrollPosition / (fullHeight - windowHeight)) * 100;

    progress.style.width = scrolled + '%'
})
