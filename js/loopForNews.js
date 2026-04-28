async function getJSON() {
    const response = await fetch('/news/news.json');
    const data = await response.json();
    return data;
}

async function init() {
    const data = await getJSON();
    const container = document.getElementById("containerForNews");

    data.News.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card block mx-auto shadow-[0_15px_30px_rgba(0,0,0,0.6)] rounded-lg reveal">
            <h2 class="text-2xl">${item.Title}</h2>
             <h5 class="text-md">${item.Date}</h5>
             <div class="h-12"></div>
            <p>${item.Content}</p>
        </div>
    `;
        container.appendChild(div);
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    });
}

init();