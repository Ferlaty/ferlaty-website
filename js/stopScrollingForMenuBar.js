document.getElementById("MenuBtn").innerHTML = `
<button popovertarget="desktop-menu-solutions" style="position: fixed; z-index: 2;" id="toggleScroll"
      class="absolute top-0 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-x-1 text-sm/60 font-semibold text-black text-[30px] my-8">
      <span>
        <div class="container" id="startMenuAnimation">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </span>
    </button>`;

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