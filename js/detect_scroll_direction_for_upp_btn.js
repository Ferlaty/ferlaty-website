document.getElementById("BtnTopPlacholder").innerHTML = `
<a id="myBtn" title="Go to top" href="#"><svg width="50px" height="50px" viewBox="0 0 24 24">
      <path
        d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
        fill="#FFFFFF" />
    </svg></a>
`;

let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
let prevScrollDirection = '';
const btnGoToTop = document.getElementById("myBtn");

window.addEventListener('scroll', function() {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (st > prevScrollTop && prevScrollDirection !== 'down') {
        // downscroll code here
        prevScrollDirection = 'down';
        btnGoToTop.classList.remove("transition");
    }
        else if (st < prevScrollTop && prevScrollDirection !== 'up') {
        // upscroll code
        prevScrollDirection = 'up';
        btnGoToTop.classList.add("transition");
     }
  }
  else {
        btnGoToTop.classList.remove("transition");
        }
  prevScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
}, false);