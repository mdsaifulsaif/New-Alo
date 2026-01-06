const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");
const catTitle = document.querySelector(".categoryTitle");
catTitle.innerText = cat;

function renderNewsByCategory(
  data,
  categoryName,
  containerSelector,
  cardClassName,
  sliceNumber
) {
  const container = document.querySelector(containerSelector);

  if (!container) return;

  const filteredNews = data
    .filter((news) => news.category === categoryName)
    .slice(0, sliceNumber);

  filteredNews.forEach((news) => {
    const card = document.createElement("article");
    card.className = cardClassName;

    card.innerHTML = `
      <div class="global-card">
       <div>
         
          <a href="details.html?id=${news.id}">
          <h1 class="global-title">${news.title}</h1>
          </a>
        
          <a href="details.html?id=${news.id}">
           <img src="${news.thumbnail}" alt="Thumbnail">
          </a>
        
       </div>
      </div>
    `;
    container.appendChild(card);
  });
}
function renderNewsByCategory2(
  data,
  categoryName,
  containerSelector,
  cardClassName,
  sliceNumber
) {
  const container = document.querySelector(containerSelector);

  if (!container) return;

  const filteredNews = data
    .filter((news) => news.category === categoryName)
    .slice(1, sliceNumber);

  filteredNews.forEach((news) => {
    const card = document.createElement("article");
    card.className = cardClassName;

    card.innerHTML = `
      <div class="global-card">
       <div>

        <a href="details.html?id=${news.id}">
           <img src="${news.thumbnail}" alt="Thumbnail">
          </a>
         
          <a href="details.html?id=${news.id}">
          <h1 class="global-title">${news.title}</h1>
          </a>
        
               <p class="global-content">${news.excerpt}</p>
       <p class="pDate">${news.publishDate}</p>
         
       </div>
      </div>
    `;
    container.appendChild(card);
  });
}

renderNewsByCategory(newsData, cat, ".c1strow-left", "cleftCard", 1);
renderNewsByCategory2(newsData, cat, ".c1strow-right", "crightCard", 2);

function filterdatabyCategory() {
  const filteredData = newsData.filter((news) => news.category == cat).slice(2);
  const getContainer = document.querySelector(".c2strow");

  filteredData.forEach((news) => {
    const ccard = document.createElement("article");

    ccard.innerHTML = `
    <div class="global-card ccard">
      <div>
          <a href="details.html?id=${news.id}">
           <img src="${news.thumbnail}" alt="Thumbnail">
          </a>
       </div>
        <div>
          <a href="details.html?id=${news.id}">
          <h1 class="global-title">${news.title}</h1>
          </a>
          <p>${news.excerpt}</p>
          <p>${news.publishDate}</p>
        </div>
     
      </div>
    `;

    getContainer.appendChild(ccard);
  });
}
filterdatabyCategory();
