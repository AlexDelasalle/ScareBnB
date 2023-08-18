// JavaScript is used to make the slider interactive

// Select the container and items
const container = document.querySelector('.photo-carousel-container');
const items = document.querySelectorAll('.item');

// Add event listener to the container
container.addEventListener('scroll', () => {
  const itemWidth = items[0].offsetWidth + 10; // 10px margin-right

  const scrollPosition = container.scrollLeft;
  const activeIndex = Math.floor(scrollPosition / itemWidth);

  items.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

//Jump Scare Function
const jumpScareButton = document.getElementById('jumpScareButton');
const imageContainer = document.getElementById('imageContainer');
const jumpScareSound = document.getElementById('jumpScareSound');

jumpScareButton.addEventListener('click', () => {
  // Play the jump scare sound
  jumpScareSound.play();

  // Show the scary image
  imageContainer.classList.add('show');

  // Hide the scary image and pause the sound after a brief moment
  setTimeout(() => {
    imageContainer.classList.remove('show');
    jumpScareSound.pause();
    jumpScareSound.currentTime = 0; // Reset audio to the beginning
  }, 3000); // Adjust this value as needed for the duration of the effect
});

//More amenities window

document.addEventListener("DOMContentLoaded", function () {
  const moreAmenitiesButton = document.querySelector(".more-amenities-button");
  const slidingDiv = document.querySelector(".sliding-div");
  const backButton = document.querySelector(".back-button");

  moreAmenitiesButton.addEventListener("click", function (event) {
      event.preventDefault();
      slidingDiv.style.transform = "translateY(0)";
  });

  backButton.addEventListener("click", function () {
      slidingDiv.style.transform = "translateY(100%)";
  });
});
