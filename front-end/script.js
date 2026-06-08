console.log("JS is working");

const container = document.getElementById("projects-container");

fetch("https://personal-portfolio-website-35jw.onrender.com/projects")
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
  .catch(err => {
    console.log("ERROR:", err);
  });
  // Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    '.about, .service-card, .gallery-item, .contact-button-section'
);

window.addEventListener('scroll', () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add('active');
        }

    });

});

/* Contact Form Validation of empty fields */
const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();



        if(name === ""){

            alert("Name cannot be empty.");

            return;
        }



        if(email === ""){

            alert("Email cannot be empty.");

            return;
        }



        if(message === ""){

            alert("Message cannot be empty.");

            return;
        }



        alert("Message sent successfully!");

        contactForm.reset();

    });

}

/* Lightbox Gallery to show images fullscreen preview */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");



galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});



if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}



if(lightbox){

    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}

/* from bottom To Top of the page Button */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }
        else{

            topBtn.style.display = "none";

        }

    }

});



if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
fetch("https://personal-portfolio-website-35jw.onrender.com/projects")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");

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
  .catch(error => {
    console.log("Error loading projects:", error);
  });