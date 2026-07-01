const HEADER_TEXT = document.querySelector('meta[name="headertext"]')?.content;

const header = document.getElementById('header');
header.innerHTML = `
<header class="p-6 bg-stone-900 shadow-md display" style="position: fixed; width: 100%; z-index: 1;">
    <a href="/"><img src="/assets/ico.png" alt="logo" style="float:right" width="50px" height="50px"
        class="header_icon"></a>
    <h1 class="text-3xl font-bold"><a href="/">Ferlaty</a></h1>
    <p class="text-gray-600">
    <div class="container">${HEADER_TEXT || 'Content Creation'}</p>
  </header>
  `;