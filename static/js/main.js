  
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





// JS --> This code selects all images, videos, YouTube videos, tweets, and Instagram posts on the page and sets their loading attribute to "lazy".


// Set all images to have lazy loading
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.setAttribute("loading", "lazy");
});

// Set all videos to have lazy loading
const videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.setAttribute("loading", "lazy");
});

// Set all YouTube videos to have lazy loading
const youtubeVideos = document.querySelectorAll("iframe[src*='youtube.com']");
youtubeVideos.forEach((video) => {
  video.setAttribute("loading", "lazy");
});

// Set all tweets to have lazy loading
const tweets = document.querySelectorAll("blockquote.twitter-tweet");
tweets.forEach((tweet) => {
  tweet.setAttribute("loading", "lazy");
});

// Set all Instagram posts to have lazy loading
const instaPosts = document.querySelectorAll("blockquote.instagram-media");
instaPosts.forEach((post) => {
  post.setAttribute("loading", "lazy");
});







// JS -> Lazy loading for images, videos, YouTube videos, tweets, and Instagram posts

document.addEventListener("DOMContentLoaded", function() {
  // Lazy load images
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    if (img.complete) {
      console.log("Image already loaded:", img);
      return;
    }
    img.addEventListener("load", function() {
      console.log("Image loaded:", img);
    });
    img.addEventListener("error", function() {
      console.log("Error loading image:", img);
    });
    img.src = img.dataset.src;
  });

  // Lazy load videos
  const lazyVideos = document.querySelectorAll('video[loading="lazy"]');
  lazyVideos.forEach(video => {
    if (video.complete) {
      console.log("Video already loaded:", video);
      return;
    }
    video.addEventListener("loadeddata", function() {
      console.log("Video loaded:", video);
    });
    video.addEventListener("error", function() {
      console.log("Error loading video:", video);
    });
    video.src = video.dataset.src;
  });

  // Lazy load YouTube videos
  const lazyYouTubeVideos = document.querySelectorAll('iframe[data-src*="youtube"]');
  lazyYouTubeVideos.forEach(ytVideo => {
    const videoSrc = ytVideo.dataset.src;
    ytVideo.addEventListener("load", function() {
      console.log("YouTube video loaded:", ytVideo);
    });
    ytVideo.addEventListener("error", function() {
      console.log("Error loading YouTube video:", ytVideo);
    });
    ytVideo.setAttribute("src", videoSrc);
  });

  // Lazy load tweets
  const lazyTweets = document.querySelectorAll('blockquote.twitter-tweet[loading="lazy"]');
  lazyTweets.forEach(tweet => {
    const tweetSrc = tweet.dataset.src;
    tweet.addEventListener("load", function() {
      console.log("Tweet loaded:", tweet);
    });
    tweet.addEventListener("error", function() {
      console.log("Error loading tweet:", tweet);
    });
    tweet.setAttribute("src", tweetSrc);
  });

  // Lazy load Instagram posts
  const lazyInstagramPosts = document.querySelectorAll('blockquote.instagram-media[loading="lazy"]');
  lazyInstagramPosts.forEach(post => {
    const postSrc = post.dataset.src;
    post.addEventListener("load", function() {
      console.log("Instagram post loaded:", post);
    });
    post.addEventListener("error", function() {
      console.log("Error loading Instagram post:", post);
    });
    post.setAttribute("src", postSrc);
  });
});


/*This enables the dark and light mode*/

/*

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




// Contact form email validators

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