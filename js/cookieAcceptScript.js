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