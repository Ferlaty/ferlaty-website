let scrollPos = 0;
const preventScroll = (e) => e.preventDefault();

const btn = document.getElementById("toggleScroll");
const menu_btn = document.getElementById("startMenuAnimation")

btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent document click from firing
    if (document.body.classList.contains('stop-scrolling')) {
        document.body.classList.remove('stop-scrolling');
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
    } else {
        document.body.classList.add('stop-scrolling');
        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });
    };
    menu_btn.classList.toggle("change");
});

document.addEventListener('click', function (event) {
    if (document.body.classList.contains('stop-scrolling')) {
        document.body.classList.remove('stop-scrolling');
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        menu_btn.classList.toggle("change");
    }
});