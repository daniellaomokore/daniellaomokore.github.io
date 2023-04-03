



// JS --> THIS ALLOWS USERS TO SMOOTHLY SCROLL TO CERTAIN LINKED AREAS OF THE PAGE

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




// JS --> THIS ALLOWS THE USER TO USE A BUTTON TO SCROLL TO THE TOP OF THE PAGE

/*
NOTE: I've wrapped the js in 'window.onload = function()' because the below The script that defines
 the behavior of the button was being executed before the button had loaded --> causing the button not to work.
 So, To fix this, I wrap the script inside a window.onload function to make sure that it is executed only
 after the page has finished loading.
*/

window.onload = function() {


    // Show the back-to-top button when the user scrolls down 20px from the top of the page
    window.onscroll = function() {
      showBackToTopButton();
    };

    function showBackToTopButton() {
      var button = document.getElementById("back-to-top-btn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }

    // Scroll to the top of the page when the user clicks the back-to-top button
    document.getElementById("back-to-top-btn").addEventListener("click", function() {
      scrollToTop();
    });

    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
}


/* LAZY LOADING FOR IMAGES, VIDEOS, YOUTUBE VIDEOS, TWEETS AND INSTAGRAM POSTS */


// Set lazy loading for images, videos, YouTube videos, tweets, and Instagram posts
const elements = document.querySelectorAll('img, video, iframe[src*="youtube.com"], blockquote.twitter-tweet, blockquote.instagram-media');
elements.forEach(element => {
  element.setAttribute('loading', 'lazy');
});




/*THIS ENABLES THE DARK AND LIGHT MODE

NOTE: I've wrapped the js in 'document.addEventListener('DOMContentLoaded', function()'

This is beause, without it,  the element i'm trying to add an event listener hasn't been loaded yet.

So I've wrapped my script in a DOMContentLoaded event listener to make sure the DOM has loaded before the code for the darkmode/lightmode is executed.

*/

document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('#checkbox');

  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
});




// CONTACT FORM INPUT VALIDATORS

// Get the form element
const form = document.querySelector('form[name="contact"]');

// Get the input fields
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const subjectInput = form.querySelector('input[name="subject"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Add event listeners to the input fields
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
subjectInput.addEventListener('input', validateSubject);
messageInput.addEventListener('input', validateMessage);

// Define the validation functions
function validateName() {
  const name = nameInput.value.trim();

  if (name === '') {
    nameInput.setCustomValidity('Name is required');
  } else {
    nameInput.setCustomValidity('');
  }
}

function validateEmail() {
  const email = emailInput.value.trim();

  if (email === '') {
    emailInput.setCustomValidity('Email is required');
  } else if (!isValidEmail(email)) {
    emailInput.setCustomValidity('Please enter a valid email address');
  } else {
    emailInput.setCustomValidity('');
  }
}

function validateSubject() {
  const subject = subjectInput.value.trim();

  if (subject === '') {
    subjectInput.setCustomValidity('Subject is required');
  } else {
    subjectInput.setCustomValidity('');
  }
}

function validateMessage() {
  const message = messageInput.value.trim();

  if (message === '') {
    messageInput.setCustomValidity('Message is required');
  } else {
    messageInput.setCustomValidity('');
  }
}

// Define a function to check if an email is valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}






  
  
  
  