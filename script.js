let currentLanguage = 'en';
let currentCategory = null;

window.onload = function () {
  const categories = [...new Set(menuItems.map(item => item.category))];
  const categoryButtons = document.getElementById('categoryButtons');
  const searchBar = document.getElementById('searchBar');

  // Create category buttons
  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.innerText = category;
    btn.onclick = () => {
      currentCategory = category;
      document.querySelectorAll('.category-buttons button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      displayMenu(category); // Show items on category click only
    };
    categoryButtons.appendChild(btn);
  });

  // Universal search across all categories
  searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase().trim();
    if (query.length === 0) {
      currentCategory = null;
      clearMenu();
    } else {
      currentCategory = null;
      document.querySelectorAll('.category-buttons button').forEach(btn => btn.classList.remove('active'));
      displayMenu(null, query);
    }
  });
};

// Clear menu when no category or search
function clearMenu() {
  const container = document.getElementById('menuContainer');
  container.innerHTML = "<p style='text-align:center'>Please select a category to view dishes.</p>";
}

clearMenu();

// Close modal button
document.querySelector(".close-btn").onclick = () => {
  document.getElementById("itemModal").style.display = "none";
};

// Close modal if clicked outside
window.onclick = function (e) {
  if (e.target.id === "itemModal") {
    document.getElementById("itemModal").style.display = "none";
  }
};

// Language switch
function switchLanguage(lang) {
  currentLanguage = lang;
  if (currentCategory || document.getElementById("searchBar").value.trim()) {
    displayMenu(currentCategory, document.getElementById("searchBar").value.toLowerCase().trim());
  }
}

// Display menu items
function displayMenu(category = null, searchQuery = "") {
  const container = document.getElementById('menuContainer');
  container.innerHTML = "";

  const filtered = menuItems.filter(item => {
    const matchCategory = category ? item.category === category : true;
    const matchSearch = item.name[currentLanguage].toLowerCase().includes(searchQuery) ||
                        item.description[currentLanguage].toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p style='text-align:center'>No dishes found.</p>";
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item';
    const banners = [];
if (item.bestSeller) banners.push('<span class="badge best-seller">Best Seller</span>');
if (item.popular) banners.push('<span class="badge popular">Popular</span>');
if (!item.inStock) banners.push('<span class="badge out-of-stock">Out of Stock</span>');

card.innerHTML = `
  <div class="image-container">
    <img src="images/${item.image}" alt="${item.name[currentLanguage]}" />
    <div class="badges">${banners.join('')}</div>
  </div>
  <div class="details">
    <h4>${item.name[currentLanguage]}</h4>
    <p>${item.description[currentLanguage]}</p>
    <p><strong>${item.price}</strong></p>
  </div>
`;
    card.addEventListener("click", () => {
      document.getElementById("modalImg").src = `images/${item.image}`;
      document.getElementById("modalName").innerText = item.name[currentLanguage];
      document.getElementById("modalDescription").innerText = item.description[currentLanguage];
      document.getElementById("modalPrice").innerText = item.price;
      document.getElementById("itemModal").style.display = "block";
    });
    container.appendChild(card);
  });
}

// Dark mode + Scroll-to-top toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggleBtn.innerHTML = document.body.classList.contains('dark') 
        ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  }

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.onscroll = () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});