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

//'See more' function
document.addEventListener("DOMContentLoaded", function() {
  const contentDiv = document.getElementById("content");
  const seeMoreButton = document.getElementById("seeMoreButton");
  const paragraphs = contentDiv.getElementsByTagName("p");
  const maxVisible = 1; // Number of paragraphs initially visible
  let visibleCount = maxVisible;

  function updateVisibility() {
    for (let i = 0; i < paragraphs.length; i++) {
      if (i < visibleCount) {
        paragraphs[i].style.display = "block";
      } else {
        paragraphs[i].style.display = "none";
      }
    }
  }

  updateVisibility();

  seeMoreButton.addEventListener("click", function() {
    visibleCount = visibleCount === maxVisible ? paragraphs.length : maxVisible;
    updateVisibility();

    seeMoreButton.textContent = visibleCount === maxVisible ? "Show More" : "Show Less";
  });
});



//Jump Scare Function

// const btnEl = document.getElementById('jumpScareButton');
// const audio = new Audio('Jump-Scare.m4a');

// btnEl.addEventListener('click', () => {
//   audio.play();
// });

const jumpScareButton = document.getElementById("jumpScareButton");
const imageContainer = document.getElementById("imageContainer");
const scaryVideo = document.getElementById("scaryVideo");

jumpScareButton.addEventListener("click", function() {
  // Set the source of the video
  scaryVideo.src = "jump-scare-video.mp4";

  // Play the video
  scaryVideo.play();

  // Display the video container
  imageContainer.style.display = "flex";

  // When the video finishes playing, hide the container and reset the source
  scaryVideo.addEventListener("ended", function() {
    imageContainer.style.display = "none";
    scaryVideo.src = "";
  });
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


// Reviews Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  loop: false,
  allowTouchMove: true,
});
