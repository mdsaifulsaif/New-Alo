function renderPostDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const postDetails = newsData.find((news) => news.id === id);
  const detailContainer = document.querySelector(".details");

  if (!postDetails) {
    detailContainer.innerHTML = "<p>কোনো তথ্য পাওয়া যায়নি</p>";
    return;
  }

  const details = document.createElement("div");
  details.className = "detail";

  details.innerHTML = `
    <div>
      <h2>${postDetails.category}</h2>
      <h1>${postDetails.title}</h1>
      <div>আপডেট: ${postDetails.publishDate}</div>
      <img src="https://i.ibb.co.com/d30C0jr/img.jpg" alt="Thumbnail">
      <p>${postDetails.content}</p>
    </div>
  `;

  detailContainer.appendChild(details);
}

renderPostDetails();
