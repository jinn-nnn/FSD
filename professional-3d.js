document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(
    ".card,.teacher-card,.faculty-card,.feature-card,.service-card,.crop-card," +
    ".vehicle-card,.gallery-item,.box,.content-card,.course-card,.stat-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.08 });

  items.forEach(item => {
    item.classList.add("reveal");
    observer.observe(item);

    item.addEventListener("mousemove", event => {
      if (window.innerWidth < 900) return;
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      item.style.transform =
        `translateY(-7px) rotateX(${(-y * 3.5).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "";
    });
  });

  // Subtle scroll progress for a polished feel.
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
});
