  // Select all links with hashes
  const links = document.querySelectorAll('a[href*="#"]');
  
  // Loop through each link and add a click event listener
  links.forEach(link => {
    link.addEventListener('click', event => {
      // Prevent default link behavior
      event.preventDefault();
      
      // Get the ID of the section we want to scroll to
      const id = link.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      
      // If the target section exists, scroll to it smoothly
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

