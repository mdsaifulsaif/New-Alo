function navberContol() {
  const navbar = document.getElementById("navbar");
  const topBar = document.getElementById("topBar");

  let lastScrollY = window.scrollY;
  const stickyPoint = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Navbar sticky logic
    if (currentScrollY >= stickyPoint) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    // fixd logic
    if (currentScrollY > lastScrollY) {
      // scrolling down
      topBar.classList.add("hide");
    } else {
      // scrolling up
      topBar.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });
}

navberContol();

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
         <h1 class="global-title">${news.title}</h1>
         <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="Thumbnail">
       </div>
       <p class="global-content">${news.excerpt}</p>
       <p class="pDate">${news.publishDate}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
function renderOpinionNews(
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
      <div class="opinion-card">
       <div>
         <img src="${news.authorImage}" alt="Thumbnail">
       </div>
       <div>
        <h1 class="opinion-title"><span class="subTitle">মতামত <i class="fas fa-circle" style="font-size: 5px;"></i></span> ${news.title}</h1>
        <div class="line"></div>
        <div class="openionInfo">

         <p><span>লেখা:</span> ${news.author}</p>
         <p class="pDate">${news.publishDate}</p>
        </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

renderNewsByCategory(newsData, "আন্তর্জাতিক", ".leftNews", "intNewsCard", 5);
renderNewsByCategory(newsData, "প্রযুক্তি", ".right1", "intNewsCard", 5);
renderNewsByCategory(newsData, "প্রযুক্তি", ".featurd2", "intNewsCard", 4);

renderOpinionNews(opinionNews, "মতামত", ".ourOpinion", "opinionCard", 5);

// full contoled function
const newsfinding = (data, options, templateCallback) => {
  const { category, selector, limit } = options;
  const container = document.querySelector(selector);

  if (!container) return;

  const html = data
    .filter((news) => news.category === category)
    .slice(0, limit)
    .map((news) => templateCallback(news))
    .join("");

  container.innerHTML = html;
};
newsfinding(
  newsData,
  { category: "বাংলাদেশ", selector: ".featurd", limit: 1 },
  (news) => {
    return `
    <article class="featured-news global-card">
      <a href="">
       <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="news">
      </a>
       <h1 class="global-title">${news.title}</h1>
       <p>${news.excerpt}</p>
       <button>বিস্তারিত পড়ুন</button>
    </article>
  `;
  }
);

// left conteainer new without image
newsfinding(
  newsData,
  { category: "বিনোদন", selector: ".leftSiteNoImage", limit: 5 },
  (news) => {
    return `
    <article class="leftnoimagenews global-card">
      <a href="">
       <h1 class="global-title">${news.title}</h1>
      </a>

       <p class="pDate">${news.publishDate}</p>
     
    </article>
  `;
  }
);

// center div 3 col news
newsfinding(
  newsData,
  { category: "প্রযুক্তি", selector: ".featurd3", limit: 6 },
  (news) => {
    return `
    <article class="center3col global-card">
        <a href="">
       <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="news">
      </a>
      <a href="">
       <h1 class="global-title">${news.title}</h1>
      </a>
     <p class="global-content">${news.excerpt}</p>
      <p class="pDate">${news.publishDate}</p>
    </article>
  `;
  }
);

//right dev title and content
newsfinding(
  newsData,
  { category: "খেলা", selector: ".right2", limit: 5 },
  (news) => {
    return `
    <article class="center3col global-card">
      <a href="">
       <h1 class="global-title">${news.title}</h1>
      </a>
     <p class="global-content">${news.excerpt}</p>
      <p class="pDate">${news.publishDate}</p>
    </article>
  `;
  }
);

//jibonjapon section
newsfinding(
  newsData,
  { category: "lifestyle", selector: ".jbn-news", limit: 4 },
  (news) => {
    return `
    <article class="center3col global-card">
     <a href="">
       <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="news">
      </a>
      <a href="">
       <h1 class="global-title">${news.title}</h1>
      </a>
     <p id="centercol3p" class="global-content ">${news.excerpt}</p>
      <p class="pDate">${news.publishDate}</p>
    </article>
  `;
  }
);

// world lerft 1 post
newsfinding(
  newsData,
  { category: "বাণিজ্য", selector: ".worldLeft", limit: 1 },
  (news) => {
    return `
    <article class=" worldCard global-card">
        <a href="">
       <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="news">
      </a>
      <a href="">
       <h1 class="global-title">${news.title}</h1>
      </a>
         <p class="global-content">${news.content}</p>
      <p class="pDate">${news.publishDate}</p>
    </article>
  `;
  }
);
// world
newsfinding(
  newsData,
  { category: "বাণিজ্য", selector: ".worldRight", limit: 4 },
  (news) => {
    return `
    <article class=" worldCard global-card">
        <a href="">
       <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="news">
      </a>
      <a href="">
       <h1 class="global-title">${news.title}</h1>
      </a>
    
      <p class="pDate">${news.publishDate}</p>
    </article>
  `;
  }
);
