// Animation fade-in au scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Mode sombre
document.getElementById('toggle-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });


  // Bouton retour en haut
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
