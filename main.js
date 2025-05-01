// Resume section tabs and tab contents
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = document.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function(resumeTabClick) {
  resumeTabContents.forEach((resumeTabContent) => {
    resumeTabContent.style.display = "none";
    resumeTabContent.classList.remove("active");
  });

  resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
    resumePortfolioTabBtn.classList.remove("active");
  });

  resumeTabContents[resumeTabClick].style.display = "flex";

  setTimeout(() => {
    resumeTabContents[resumeTabClick].classList.add("active");
  }, 100);

  resumeTabContents[resumeTabClick].classList.add("active");

  resumePortfolioTabBtns[resumeTabClick].classList.add("active");
};

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
  resumePortfolioTabBtn.addEventListener("click", () => {
    resumeTabNav(i);
  });
});



/* Service modal open/close function */
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
  const serviceCard = serviceCardWithModal.querySelector(".service-card");
  const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
  const serviceModal = serviceCardWithModal.querySelector(".service-modal");
  const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

  serviceCard.addEventListener("click", () => {
    serviceBackDrop.style.display = "flex";

    setTimeout(() => {
      serviceBackDrop.classList.add("active");
    }, 100);

    setTimeout(() => {
        serviceModal.classList.add("active");
      }, 300);
  });

  modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
      serviceBackDrop.style.display = "none";
    }, 500);
  
    setTimeout(() => {
      serviceBackDrop.classList.remove("active");
      serviceModal.classList.remove("active");
    }, 100);
  });
});

// Filter portfolio cards according to portfolio tabs (Revised with class toggle)
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");
  
    portfolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
        const filter = tabBtn.getAttribute("data-filter");
  
        cardsWithModals.forEach((cardWithModal) => {
          if (filter === "all" || cardWithModal.classList.contains(filter)) {
            cardWithModal.classList.remove("hidden"); // Show the card
            setTimeout(() => {
              cardWithModal.style.opacity = "1";
              cardWithModal.style.transition = "opacity .5s ease";
            }, 1); // Slight delay to allow transition
          } else {
            cardWithModal.style.opacity = "0";
            cardWithModal.style.transition = "opacity .5s ease";
            setTimeout(() => {
              cardWithModal.classList.add("hidden"); // Hide the card after transition
            }, 500); // Match the transition duration
          }
        });
  
        // Add active class to the clicked tab and remove from others
        portfolioTabBtns.forEach(btn => {
          btn.classList.remove("active");
        });
        tabBtn.classList.add("active");
      });
    });
  
    // Initially show all projects
    const allTab = document.querySelector('.portfolio-tabs .tab-btn[data-filter="all"]');
    if (allTab) {
      allTab.classList.add('active');
    }
  });

 



  // Open/Close Portfolio modals (Simplified and potentially fixed timing)
  const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

  portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");
  
    // --- Open Modal ---
    portfolioCardWithModal.addEventListener("click", (event) => {
      console.log("Portfolio card clicked:", portfolioCardWithModal); // Debugging
      if (portfolioBackdrop) {
        portfolioBackdrop.style.display = "flex";
        requestAnimationFrame(() => {
          portfolioBackdrop.classList.add("active");
        });
      }
      if (portfolioModal) {
        requestAnimationFrame(() => {
          portfolioModal.classList.add("active");
        });
      }
      event.stopPropagation(); // Prevent card click from triggering backdrop click
    });
  
    // --- Close Modal ---
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", (event) => {
        console.log("Close button clicked:", modalCloseBtn); // Debugging
        closeModal();
        event.stopPropagation(); // Prevent click from propagating to backdrop
      });
    }
  
    // --- Close Modal when clicking outside ---
    if (portfolioBackdrop) {
      portfolioBackdrop.addEventListener("click", (event) => {
        console.log("Backdrop clicked:", event.target); // Debugging
        if (event.target === portfolioBackdrop) {
          closeModal();
        }
      });
    }
  
    // --- Function to close the modal ---
    function closeModal() {
      console.log("closeModal function called"); // Debugging
      if (portfolioBackdrop) {
        portfolioBackdrop.style.display = "none";
        portfolioBackdrop.classList.remove("active");
      }
      if (portfolioModal) {
        portfolioModal.classList.remove("active");
      }
    }
  });
  

  var swiper = new Swiper(".sue-client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  (function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "jsDj2YpT_GSnty2MQ",
    });
})();

const sueContactForm = document.getElementById("sue-contact-form");
const sueContactFormAlert = document.querySelector(".contact-form-alert");

sueContactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs.sendForm('service_aqth4tw', 'template_4sxwy5u', '#sue-contact-form')
  .then(() => {
    // console.log('SUCCESS!');
    sueContactFormAlert.innerHTML = "<span>Your message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
    sueContactForm.reset();

    setTimeout(() => {
        sueContactFromAlert.innerHTML = "";
      }, 5000);
  }, (error) => {
    // console.log('FAILED...', error);
    sueContactFormAlert.innerHTML = "<span>Message not sent!</span> <i class='ri-error-warning-fill'></i>";
    
    sueContactFormAlert.title = error;
  });
});
window.addEventListener("scroll", () => {
  const sueHeader = document.querySelector(".sue-header");
  sueHeader.classList.toggle("shrink", window.scrollY > 0);
});

// Bottom navigation menu

// Each bottom navigation menu item becomes active on page scroll.
window.addEventListener("scroll", () => {
  const navMenuSections = document.querySelectorAll(".nav-menu-section");
  const scrollY = window.pageYOffset;

  navMenuSections.forEach((navMenuSection) => {
    const sectionHeight = navMenuSection.offsetHeight;
    const sectionTop = navMenuSection.offsetTop - 50;
    const id = navMenuSection.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.remove("current");
    }
  });
});

// Javascript to show bottom navigation menu on home (page load).
window.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.querySelector(".bottom-nav");
  bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show/hide bottom navigation menu on home (scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
  bottomNav.classList.add("active");
  menuShowBtn.classList.remove("active");

  if (window.scrollY < 10) {
    menuHideBtn.classList.remove("active");

    function scrollStopped() {
      bottomNav.classList.add("active");
    }
    clearTimeout(navTimeout);
    navTimeout = setTimeout(scrollStopped, 2500);
  }

  if (window.scrollY > 10) {
    menuHideBtn.classList.add("active");

    function scrollStopped() {
      bottomNav.classList.remove("active");
      menuShowBtn.classList.add("active");
    }
    clearTimeout(navTimeout);
    navTimeout = setTimeout(scrollStopped, 2500);
  }
});

// Hide bottom navigation menu on click of menu-hide-btn.
// Hide bottom navigation menu on click of menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.toggle("active");
  menuShowBtn.classList.toggle("active");
});
// Show bottom navigation menu on click of menu-show-btn.
menuShowBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.add("active");
  menuShowBtn.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  const toTopBtn = document.querySelector(".to-top-btn");
  toTopBtn.classList.toggle("active", window.scrollY > 0);

  // Scroll indicator bar
const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrollValue = (pageScroll / height) * 100;

scrollIndicatorBar.style.height = scrollValue + "%";
});

/* =========== Customized cursor on mousemove =========== */
const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursorDot.style.top = y + "px";
 cursorDot.style.left = x + "px";
  cursorCircle.style.top = y + "px";
  cursorCircle.style.left = x + "px";
});

const cursorHoverLinks = document.querySelectorAll("body a, .theme-btn, .sue-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn");
cursorHoverLinks.forEach((cursorHoverLink) => {
  cursorHoverLink.addEventListener("mouseover", () => {
   cursorDot.classList.add("large");
   cursorCircle.style.display = "none";
  });
});
cursorHoverLinks.forEach((cursorHoverLink) => {
 cursorHoverLink.addEventListener("mouseout", () => {
   cursorDot.classList.remove("large");
  cursorCircle.style.display = "block";
 });
});

// Change theme and save current theme on click the theme button.
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

  themeBtn.classList.toggle("active-sun-icon");
  document.body.classList.toggle("light-theme");

  // Save theme icon and theme on click the theme button.
const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

localStorage.setItem("sue-saved-icon", getCurrentIcon());
localStorage.setItem("sue-saved-theme", getCurrentTheme());
});
// Get saved theme icon and theme on document loaded.
const savedIcon = localStorage.getItem("sue-saved-icon");
const savedTheme = localStorage.getItem("sue-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
  document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");

});
/* ScrollReveal JS animations */

// Common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

// Target elements and specify options to create reveal animations
ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.avatar-info, .section-title', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.about-info, .sue-footer .sue-logo', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.pro-card, .about-buttons .sue-main-btn, .resume-tabs .tab-btn, .portfolio-tabs .tab-btn', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.resume .section-content', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.service-card,  .contact-item, .contact-social-links li, .footer-menu .menu-item', { delay: 300, origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.sue-client-swiper, .contact-form-body', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.contact-info-h3', { delay: 100, origin: 'bottom', interval: 300});







