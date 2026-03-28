// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Top";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.background = "#004aad";
backToTop.style.color = "#fff";
backToTop.style.border = "none";
backToTop.style.borderRadius = "6px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animate tool cards on scroll
const toolCards = document.querySelectorAll(".tool-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

toolCards.forEach(card => observer.observe(card));

// Optional: Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.className = "dark-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.left = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.background = "#009688";
toggleBtn.style.color = "#fff";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "6px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.zIndex = "999";

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
