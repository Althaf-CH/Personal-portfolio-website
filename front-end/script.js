console.log("JS is working");

// Run ONLY on project page
const container = document.getElementById("projects-container");

if (container) {
  fetch("/api/projects")
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data);

      container.innerHTML = "";

      data.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("service-card");

        card.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.technology}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => console.log("ERROR:", err));
}

/* ---------------- SAFE WRAPPERS FOR OTHER FEATURES ---------------- */

// Scroll animation
const revealElements = document.querySelectorAll(
  '.about, .service-card, .gallery-item, .contact-button-section'
);

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});

// Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("All fields required");
      return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
  });
}

// Lightbox safe
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.getElementById("closeLightbox");

if (closeLightbox && lightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

// Back to top
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}