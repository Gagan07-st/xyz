// ------------------------------
// Responsive Navigation Toggle
// ------------------------------
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

navToggle.addEventListener("click", () => {
  const open = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

// ------------------------------
// Smooth Scroll for Navigation
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ------------------------------
// Admissions Modal Popup
// ------------------------------
const openApply = document.getElementById("open-apply");

// Create modal dynamically
const modal = document.createElement("div");
modal.id = "apply-modal";
modal.innerHTML = `
  <div class="modal-overlay"></div>
  <div class="modal-box">
    <h2>Application Form</h2>
    <p>This is a demo popup. Add your form here.</p>
    <button id="close-modal" class="btn primary">Close</button>
  </div>
`;
document.body.appendChild(modal);

const closeModal = document.getElementById("close-modal");
const overlay = modal.querySelector(".modal-overlay");

openApply.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("show");
});

// ------------------------------
// Modal Styles Injection
// ------------------------------
const modalStyles = document.createElement("style");
modalStyles.textContent = `
  #apply-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }

  #apply-modal.show {
    display: flex;
  }

  .modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
  }

  .modal-box {
    position: relative;
    background: white;
    padding: 30px;
    border-radius: 12px;
    width: min(400px, 90%);
    z-index: 3000;
    text-align: center;
    animation: popIn 0.4s ease;
  }

  @keyframes popIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(modalStyles);

// ------------------------------
// Scroll Animation on Cards
// ------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".card, .program").forEach((el) => {
  observer.observe(el);
});

// Add animation styles
const fadeStyles = document.createElement("style");
fadeStyles.textContent = `
  .card, .program {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.6s ease;
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(fadeStyles);