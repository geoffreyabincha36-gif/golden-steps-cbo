// Function to show/hide the scroll-to-top button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Function to smoothly scroll to the top of the page
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Add the button to your HTML
// In your index.html file, just before the closing </body> tag,
// add this line of code:
// <button onclick="topFunction()" id="scrollToTopBtn" title="Go to top">Top</button>
// And add this to your styles.css file:
// #scrollToTopBtn {
//   display: none;
//   position: fixed;
//   bottom: 20px;
//   right: 30px;
//   z-index: 99;
//   border: none;
//   outline: none;
//   background-color: #007bff;
//   color: white;
//   cursor: pointer;
//   padding: 15px;
//   border-radius: 10px;
//   font-size: 18px;
// }


document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.getElementById('update-scroll-container');
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');

  if (!scrollContainer || !rightArrow || !leftArrow) {
    // Exit if elements don't exist to prevent errors
    return;
  }

  // Scroll amount is the width of one card + the gap
  // Use getBoundingClientRect().width to get the real width
  const scrollAmount = document.querySelector('.update-item').getBoundingClientRect().width + 32;

  rightArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  leftArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  // Check if the slider exists on the current page
 function initImageSlider() {
            // Check specifically for slides on the current ACTIVE page
            const activePage = document.querySelector('.page.active');
            if (!activePage) return;

            const slides = activePage.querySelectorAll('.slide');
            
            // FIX: Ensure the slider elements exist before running the script
            if (slides.length === 0) {
                console.log("No slider found on this page.");
                return; 
            }

            let currentSlide = 0;

            // Clear any existing intervals to prevent multiple sliders running simultaneously
            if (window.sliderInterval) {
                clearInterval(window.sliderInterval);
            }

            function showSlide(index) {
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                slides[index].classList.add('active');
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            // Set the interval and store it globally to manage it later
            window.sliderInterval = setInterval(nextSlide, 4000);

            // Show the first slide initially
            showSlide(currentSlide);
        }

        // Initialize the slider when the DOM is fully loaded and only if it's the active page
        document.addEventListener('DOMContentLoaded', () => {
            // Attach event listener for mobile menu toggle
            hamburgerButton.addEventListener('click', () => {
                hamburgerButton.classList.toggle('active');
                mobileMenu.classList.toggle('hidden');
            });
            
            // Initial page load switch
            switchPage('home-page');
        });

        // Re-initialize slider when the page switches to "About Us"
        // This is handled inside the switchPage function now.

/* JavaScript to toggle the menu */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  hamburgerButton.classList.toggle('active');
});
