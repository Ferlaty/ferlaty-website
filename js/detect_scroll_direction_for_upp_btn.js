let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
let prevScrollDirection = '';
const btn = document.getElementById("myBtn");

window.addEventListener('scroll', function() {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (st > prevScrollTop && prevScrollDirection !== 'down') {
        // downscroll code here
        prevScrollDirection = 'down';
        btn.classList.remove("transition");
    }
        else if (st < prevScrollTop && prevScrollDirection !== 'up') {
        // upscroll code
        prevScrollDirection = 'up';
        btn.classList.add("transition");
     }
  }
  else {
        btn.classList.remove("transition");
        }
  prevScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
}, false);