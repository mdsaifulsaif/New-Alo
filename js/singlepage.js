function renderPostDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const postDetails = newsData.find((news) => news.id === id);
  const getCategory = postDetails.category;
  const detailContainer = document.querySelector(".details");

  if (!postDetails) {
    detailContainer.innerHTML = "<p>কোনো তথ্য পাওয়া যায়নি</p>";
    return;
  }

  const details = document.createElement("div");
  details.className = "postDetailsBox";

  details.innerHTML = `
    <div>
      <h2>${postDetails.category}</h2>
      <div class="line"></div>
      <h1>${postDetails.title}</h1>
      <div class="publishDate">
      <div>আপডেট: ${postDetails.publishDate}</div>
      <div class="social-links">
  <a href="https://facebook.com" target="_blank" aria-label="Facebook">
    <i class="fa-brands fa-facebook-f"></i>
  </a>

  <a href="https://instagram.com" target="_blank" aria-label="Instagram">
    <i class="fa-brands fa-instagram"></i>
  </a>

  <a href="https://x.com" target="_blank" aria-label="X">
    <i class="fa-brands fa-x-twitter"></i>
  </a>

  <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
    <i class="fa-brands fa-linkedin-in"></i>
  </a>

  <a href="https://dribbble.com" target="_blank" aria-label="Dribbble">
    <i class="fa-brands fa-dribbble"></i>
  </a>
</div>

      </div>
      <img src="${postDetails.thumbnail}" alt="Thumbnail">
      <p>${postDetails.content}</p>
    </div>
  `;

  detailContainer.appendChild(details);

  // reletaded post
  const suggestNews = document.querySelector(".suggests");

  const singlepageRight = newsData
    .filter((news) => news.category === getCategory && news.id !== id)
    .slice(0, 5);

  singlepageRight.forEach((news) => {
    const suggestDiv = document.createElement("div");
    suggestDiv.className = "single-irght-card";

    suggestDiv.innerHTML = `
        <div class="global-card">
       <div class="image-title">
       <a href="details.html?id=${news.id}">
        <h1 class="global-title">${news.title}</h1>
       </a>
        <a href="details.html?id=${news.id}">
         <img src="${news.thumbnail}" alt="Thumbnail">
        </a>
        
       </div>
       <p class="global-content">${news.excerpt}</p>
       <p class="pDate">${news.publishDate}</p>
      </div>`;

    suggestNews.appendChild(suggestDiv);
  });
}

renderPostDetails();
