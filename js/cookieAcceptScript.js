const CookieBannerPlace = document.getElementById("COOKIE");

CookieBannerPlace.innerHTML = `<div id="cookie-banner"
    style="position:fixed;bottom:0;width:100%;color:#fefeff;padding:15px;text-align:center;display:none; z-index: 1;" class="bg-[#000105]/75">
    We use cookies to ensure you have the best experience on our website.
    <a href="/legal.html" class="text-blue-600 hover:underline">Read more</a>
    <button id="accept-cookies" style="margin-left:10px;padding:5px 10px;"
      class="inline-block m mt-0 px-10 py-2 bg-cyan-550 rounded-lg hover:bg-[#000100] transition"><b>Accept</b></button>
  </div>
`;

setCookie = (cName, cValue, expDays) => {
            let date = new Date();
            date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        }

        getCookie = (cName) => {
            const name = cName + "=";
            const cDecoded = decodeURIComponent(document.cookie);
            const cArr = cDecoded.split("; ");
            let value;
            cArr.forEach(val => {
                if (val.indexOf(name) === 0) value = val.substring(name.length);
            })

            return value;
        }

        document.querySelector("#accept-cookies").addEventListener("click", () => {
            document.querySelector("#cookie-banner").style.display = "none";
            setCookie("cookies_accepted", true, 365);
            loadGoogleAnalytics();
        })

        cookieMessage = () => {
            if (!getCookie("cookies_accepted"))
                document.querySelector("#cookie-banner").style.display = "block";
        }

        window.addEventListener("load", cookieMessage);

        // Load GA only after consent
        function loadGoogleAnalytics() {
            const script = document.createElement('script');
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-CDTSQCSBVM";
            script.async = true;
            document.head.appendChild(script);

            script.onload = function () {
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-CDTSQCSBVM');
            };
        }