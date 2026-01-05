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

// const newsGrid = document.querySelector(".posts");

// newsData.forEach((news) => {
//   const card = document.createElement("article");
//   card.className = "news-card";

//   card.innerHTML = `

//     <div class="news-content">
//       <span class="category">${news.category}</span>
//       <h3 class="title">
//         <a href="news.html?id=${news.id}">${news.title}</a>
//       </h3>
//       <p class="description">${news.excerpt}</p>
//       <span class="date">${news.publishDate}</span>
//     </div>
//   `;

//   newsGrid.appendChild(card);
// });

//politics
// const intContainer = document.querySelector(".left");
// const worldNews = newsData.filter((news) => news.category === "আন্তর্জাতিক");

// worldNews.forEach((news) => {
//   const card = document.createElement("article");
//   card.className = "int-news";

//   card.innerHTML = `
//     <div class="intNewsCard">
//      <div>
//      <h1>${news.title},  </h1>
//      <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="Thumnail">
//      </div>
//      <p>${news.excerpt}</p>

//      <p class="pDate">${news.publishDate}</p>
//     </div>
//     `;
//   intContainer.appendChild(card);
// });

//   console.log(worldNews);
function internationalNews(data) {
  const intContainer = document.querySelector(".left");
  const worldNews = data.filter((news) => news.category === "আন্তর্জাতিক");

  worldNews.forEach((news) => {
    const card = document.createElement("article");
    card.className = "int-news";

    card.innerHTML = `
    <div class="intNewsCard">
     <div>
     <h1>${news.title},  </h1>
     <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="Thumnail">
     </div>
     <p>${news.excerpt}</p>

     <p class="pDate">${news.publishDate}</p>
    </div>
    `;
    intContainer.appendChild(card);
  });
}
internationalNews(newsData);
//nationa
function nationalNews(data) {}
nationalNews(newsData);
//new
