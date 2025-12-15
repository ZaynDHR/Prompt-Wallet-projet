// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
  main.classList.add('shift');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  main.classList.remove('shift');
});

// Close sidebar when clicking on a link
const links = document.querySelectorAll('aside a');
links.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    main.classList.remove('shift');
  });
});

// Select all sidebar links and page sections
const pages = document.querySelectorAll('.page');

// Function to switch to a target section
function switchToPage(targetId) {
  const targetPage = document.getElementById(targetId);

  // Animate out current page
  pages.forEach(page => {
    if (page.classList.contains('active')) {
      page.classList.remove('active');
      setTimeout(() => {
        page.style.display = 'none';
      }, 500);
    }
  });

  // Animate in target page
  setTimeout(() => {
    pages.forEach(p => p.style.display = 'none');
    targetPage.style.display = 'block';
    setTimeout(() => targetPage.classList.add('active'), 10);
  }, 500);

  // Highlight the corresponding sidebar link
  links.forEach(link => {
    const linkTarget = link.getAttribute('data-target');
    link.classList.toggle('active-link', linkTarget === targetId);
  });
}

// Sidebar navigation clicks
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    switchToPage(target);
  });
});

// Home page "Contact Me" button click
const contactButton = document.getElementById("go-to-contact");
if (contactButton) {
  contactButton.addEventListener("click", () => {
    switchToPage("contact");
  });
}
