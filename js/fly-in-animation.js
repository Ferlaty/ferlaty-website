const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 }); // Triggers when 10% of the element is visible

// Tell the observer to watch all elements with the "reveal" class
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));