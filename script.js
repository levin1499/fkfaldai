document.addEventListener("DOMContentLoaded", () => {
  // === Hide Loader on Page Load ===
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  });

  // === Handle Booking Form Submission ===
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const confirmation = document.getElementById("confirmation");
      if (confirmation) {
        confirmation.innerText = `Thank you, ${name}. Your request has been submitted!`;
      }
      form.reset();
    });
  }

  // === Tab and Gallery Setup ===
  const tabButtonsContainer = document.getElementById('tabButtons');
  const tabContentsContainer = document.getElementById('tabContents');

  const tabNames = [
    "GOLDEN STATES", "ALDAI TTI", "KAMBI STARS", "WEDGE UNITED",
    "GALACTICALS", "TAACHASIS", "WHITE HORSES", "SHARKS", "MOTEMA"
  ];

  const imageFolderPath = " ";

  // === Manually define player names per team ===
  const playerNames = {
    "GOLDEN STATES": ["John Doe", "Alex Smith", "Chris Wayne", "Daniel Kip", "Steve Otieno", "levin mwange"],
    "ALDAI TTI": ["Samuel Kip", "Brian Otieno", "Elijah Kiptoo"],
    "KAMBI STARS": ["Kevin Omondi", "Jacob Ngetich", "Martin Kiprono"],
    "WEDGE UNITED": ["Peter Langat", "Victor Wanyama", "James Mwaura"],
    "GALACTICALS": ["Denis Mutua", "Sammy Mwangi", "Collins Kibet"],
    "TAACHASIS": ["Eric Kipchumba", "Elias Tanui", "Fred Kipkurui"],
    "WHITE HORSES": ["Andrew Meli", "Moses Barno", "Joshua Kipngetich"],
    "SHARKS": ["Joseph Otieno", "Frankline Kiprotich", "Michael Limo"],
    "MOTEMA": ["George Kimani", "Isaac Ngeno", "Kennedy Omwenga"]
  };

  // Create all tab buttons and galleries
  tabNames.forEach((tabName, index) => {
    const tabId = `tab${index + 1}`;

    // Create tab button
    const tabButton = document.createElement('div');
    tabButton.className = 'tab';
    tabButton.textContent = tabName;
    tabButton.dataset.tab = tabId;
    tabButtonsContainer.appendChild(tabButton);

    // Create tab content with image gallery
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';
    tabContent.id = tabId;

    const gallery = document.createElement('div');
    gallery.className = 'gallery';

    const names = playerNames[tabName] || [];

    names.forEach((playerName, i) => {
      const container = document.createElement('div');
      container.className = 'image-container';

      // Image
      const img = document.createElement('img');
      img.src = `${imageFolderPath}${tabName}/${i + 1}.jpg`;
      img.alt = `${tabName} - ${playerName}`;

      // Error fallback image
      img.onerror = () => {
        img.src = "img/placeholder.jpg";
        overlay.textContent = `${tabName} - Image not available`;
      };

      // Overlay text
      const overlay = document.createElement('div');
      overlay.className = 'overlay-text';
      overlay.textContent = playerName || `${tabName} Player ${i + 1}`;

      // Toggle overlay on click
      container.appendChild(img);
      container.appendChild(overlay);
      container.addEventListener('click', () => {
        container.classList.toggle('clicked');
      });

      gallery.appendChild(container);
    });

    tabContent.appendChild(gallery);
    tabContentsContainer.appendChild(tabContent);
  });

  // === Tab Switching Logic ===
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  const activateTab = (tabId) => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    document.querySelector(`[data-tab="${tabId}"]`)?.classList.add('active');
    document.getElementById(tabId)?.classList.add('active');
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab);
    });
  });

  // Activate first tab by default
  if (tabs.length > 0) {
    activateTab(tabs[0].dataset.tab);
  }
});

// === Responsive Navigation Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
