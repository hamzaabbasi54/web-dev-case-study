// ===== EVENT DATA (dummy JSON) =====
const events = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "April 12, 2026",
    time: "5:00 PM",
    location: "Riverside Park, Downtown",
    description: "An evening of live music featuring local bands and food trucks.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80"
  },
  {
    id: 2,
    name: "Tech Innovators Meetup",
    date: "April 18, 2026",
    time: "6:30 PM",
    location: "The Hub Co-working, 5th Avenue",
    description: "Network with developers and founders. Talks on AI and cloud apps.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
  },
  {
    id: 3,
    name: "Weekend Art Workshop",
    date: "April 20, 2026",
    time: "10:00 AM",
    location: "Creative Studio, Elm Street",
    description: "A hands-on watercolour workshop led by local artists. All levels welcome.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80"
  },
  {
    id: 4,
    name: "City Night Run 5K",
    date: "April 25, 2026",
    time: "8:00 PM",
    location: "Central Boulevard",
    description: "A neon-lit 5K run through the city. Medals and refreshments included.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80"
  },
  {
    id: 5,
    name: "Farmers Market & Food Fair",
    date: "April 27, 2026",
    time: "9:00 AM",
    location: "Old Town Square",
    description: "Fresh produce and street food from over 40 local vendors.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80"
  }
];


// ===== RENDER EVENT CARDS =====
function renderEvents(eventsToShow) {
  const grid = document.getElementById("events-grid");
  const noResults = document.getElementById("no-results");

  // Build HTML for each event card
  let html = "";
  for (let i = 0; i < eventsToShow.length; i++) {
    const event = eventsToShow[i];
    html += `
      <div class="event-card">
        <img src="${event.image}" alt="${event.name}" />
        <div class="card-body">
          <h3>${event.name}</h3>
          <p class="card-date">📅 ${event.date} • ${event.time}</p>
          <p class="card-location">📍 ${event.location}</p>
          <p class="card-desc">${event.description}</p>
          <button class="btn-register">Register</button>
        </div>
      </div>
    `;
  }

  grid.innerHTML = html;

  // Show/hide "no results" message
  if (eventsToShow.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}


// ===== SEARCH FILTER =====
function setupSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    // Filter events whose name includes the search query
    const filtered = events.filter(function (event) {
      return event.name.toLowerCase().includes(query);
    });

    renderEvents(filtered);
  });
}


// ===== MOBILE NAV TOGGLE =====
function setupMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
}


// ===== INITIALIZE EVERYTHING WHEN PAGE LOADS =====
document.addEventListener("DOMContentLoaded", function () {
  renderEvents(events);   // show all events on load
  setupSearch();           // enable search filtering
  setupMobileNav();        // enable hamburger menu
});
