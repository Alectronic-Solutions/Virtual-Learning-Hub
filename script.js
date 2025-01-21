// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

if (fadeElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// Modal Pop-ups
const programButtons = document.querySelectorAll('.program-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

if (programButtons.length > 0) {
  programButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'flex';
    });
  });
}

if (closeButtons.length > 0) {
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none';
    });
  });
}

if (modals.length > 0) {
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
}

// Contact Now Button in Modals
const contactNowButtons = document.querySelectorAll('.contact-now');

if (contactNowButtons.length > 0) {
  contactNowButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none';
    });
  });
}

// Handle Student Portal Login Form Submission
const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === "student" && password === "password") {
      alert('Login successful! Redirecting to dashboard...');
      // Redirect to a dashboard page (you can replace this with your actual logic)
      window.location.href = "dashboard.html"; // Replace with your dashboard page
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
}

// Dropdown Functionality
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle('active');

    // Rotate the chevron icon
    const chevron = button.querySelector('i');
    chevron.classList.toggle('fa-chevron-up');
    chevron.classList.toggle('fa-chevron-down');
  });
});

// Close dropdowns when clicking outside
window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdown-btn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
    });

    // Reset chevron icons
    const chevrons = document.querySelectorAll('.dropdown-btn i');
    chevrons.forEach(chevron => {
      chevron.classList.remove('fa-chevron-up');
      chevron.classList.add('fa-chevron-down');
    });
  }
});