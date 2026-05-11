async function getJSON() {
    const response = await fetch('/news/index.json');
    const data = await response.json();
    return data;
}

async function init() {
    const data = await getJSON();
    const container = document.getElementById("containerForNews");

    data.News.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
        <article class="card block mx-auto shadow-[0_15px_30px_rgba(0,0,0,0.6)] rounded-lg reveal hover:scale-105
           transition-all duration-700 ease-in-out">
            <a href="/news/posts/${item.PostID}.html">
                <h2 class="text-2xl">${item.Title}</h2>
                <time class="text-md">${item.Date}</time>
                <div class="h-12"></div>
                <p>${item.ContentShort}</p>
            </a>
        </article>
    `;
        container.appendChild(div);
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    });
}

init();