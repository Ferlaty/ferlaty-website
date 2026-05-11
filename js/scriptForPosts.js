async function getJSON() {
    const response = await fetch('/news/index.json');
    const data = await response.json();
    return data;
}

async function init() {
    const data = await getJSON();
    const container = document.getElementById("postContent");
    const postid = document.querySelector('meta[name="postid"]')?.content;

    data.News.forEach(item => {

        if (postid === item.PostID) {
            if (item.bannerImg == "") {
                container.innerHTML = `
        <div>
        <a href="/news/"
                 class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors mb-12">
                &#8592; Back to news
            </a>
            <h1 class="text-4xl font-medium leading-snug mb-3">${item.Title}</h1>
             <time class="text-sm text-neutral-400 block mb-10">${item.Date}</time>
             <hr class="border-neutral-800 mb-10">
             <div class="prose prose-invert prose-neutral max-w-none
                 prose-p:text-neutral-300 prose-p:leading-relaxed
                 prose-headings:font-medium prose-headings:text-neutral-100
                 prose-a:text-neutral-100 prose-a:underline prose-a:underline-offset-4
                 prose-code:text-neutral-300 prose-code:bg-neutral-900 prose-code:px-1 prose-code:rounded">
 
            <p>${item.Content}</p>
 
         </div>
        </div>
        `;
            }
            else {
                container.innerHTML = `
        <div>
            <a href="/news/"
                 class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors mb-12">
                &#8592; Back to news
            </a>
             <img
                src="${item.bannerImg}"
                 alt="Cover image for post title"
                class="w-full aspect-video object-cover rounded-lg mb-10"
            >
            <h1 class="text-4xl font-medium leading-snug mb-3">${item.Title}</h1>
             <time class="text-sm text-neutral-400 block mb-10">${item.Date}</time>
             <hr class="border-neutral-800 mb-10">
             <div class="prose prose-invert prose-neutral max-w-none
                 prose-p:text-neutral-300 prose-p:leading-relaxed
                 prose-headings:font-medium prose-headings:text-neutral-100
                 prose-a:text-neutral-100 prose-a:underline prose-a:underline-offset-4
                 prose-code:text-neutral-300 prose-code:bg-neutral-900 prose-code:px-1 prose-code:rounded">
 
            <p>${item.Content}</p>
 
         </div>
        </div>
        `;
            }
        

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        }

    });    
    
}

init();