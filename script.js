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

//nationa
function nationalNews(data) {}
nationalNews(newsData);
//new

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
      <div>
       <div>
         <h1>${news.title}</h1>
         <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="Thumbnail">
       </div>
       <p>${news.excerpt}</p>
       <p class="pDate">${news.publishDate}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

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

renderNewsByCategory(newsData, "আন্তর্জাতিক", ".left", "intNewsCard", 5);
renderNewsByCategory(newsData, "প্রযুক্তি", ".right", "intNewsCard", 5);
renderNewsByCategory(newsData, "প্রযুক্তি", ".featurd2", "intNewsCard", 4);

newsfinding(
  newsData,
  { category: "বাংলাদেশ", selector: ".featurd", limit: 1 },
  (news) => {
    return `
    <article class="featured-news">
      <a href="">
       <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="news">
      </a>
       <h1>${news.title}</h1>
       <p>${news.excerpt}</p>
       <button>বিস্তারিত পড়ুন</button>
    </article>
  `;
  }
);

// left conteainer new without image
newsfinding(
  newsData,
  { category: "বাংলাদেশ", selector: ".featurd", limit: 1 },
  (news) => {
    return `
    <article class="featured-news">
      <a href="">
       <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="news">
      </a>
       <h1>${news.title}</h1>
       <p>${news.excerpt}</p>
       <button>বিস্তারিত পড়ুন</button>
    </article>
  `;
  }
);
