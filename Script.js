// Select all navigation links
document.querySelectorAll('header .right ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
      const targetHref = this.getAttribute('href');

      // Check if the link is "About Us"
      if (targetHref === '#about') {
          e.preventDefault(); // Prevent in-page navigation
          window.location.href = 'https://www.emarubber.in/about'; // Redirect to the About Us page
      } 
      // Check if the link is "Privacy"
      else if (targetHref === '#privacy') {
          e.preventDefault(); // Prevent in-page navigation
          window.location.href = 'https://www.emarubber.in/privacy-policy'; // Redirect to the Privacy page
      } 
      // Check if the link is "Contact"
      else if (targetHref === '#contact') {
          e.preventDefault(); // Prevent default behavior
          const footer = document.querySelector('footer'); // Select the footer element
          if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the footer
          }
      } 
      // Default behavior for other links (smooth scroll)
      else {
          e.preventDefault();
          const targetElement = document.querySelector(targetHref);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 20, // Adjust for header height
                  behavior: 'smooth',
              });
          }
      }
  });
});