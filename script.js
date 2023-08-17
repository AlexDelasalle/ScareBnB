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
