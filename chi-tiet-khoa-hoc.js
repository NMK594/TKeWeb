const btn = document.getElementById("show-btn");
      const textBox = document.getElementById("des");

      btn.addEventListener("click", () => {
        const isExpanded = textBox.classList.contains("expanded");

        if (isExpanded) {
          textBox.classList.remove("expanded");
          btn.textContent = "Show more";
        } else {
          textBox.classList.add("expanded");
          btn.textContent = "Show less";
        }
      });
document.addEventListener("DOMContentLoaded", () => {
        const topContainer = document.getElementById("top-container");
        const sidebar = document.querySelector(".sidebar");

        function handleScroll() {
          const topBottom = topContainer.getBoundingClientRect().bottom;

          if (topBottom <= 0) {
            // Khi top-container đã cuộn khỏi màn hình
            sidebar.classList.add("sidebar-fixed");
          } else {
            sidebar.classList.remove("sidebar-fixed");
          }
        }

        window.addEventListener("scroll", handleScroll);
      });
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.cards');
const nextBtn = document.querySelector('.nav.next');
const prevBtn = document.querySelector('.nav.prev');

const cardCount = cards.length;
const visibleCards = 3;
let index = visibleCards;
let isTransitioning = false;

// Clone last and first few items for infinite effect
for (let i = cardCount - visibleCards; i < cardCount; i++) {
  const clone = cards[i].cloneNode(true);
  track.prepend(clone);
}
for (let i = 0; i < visibleCards; i++) {
  const clone = cards[i].cloneNode(true);
  track.append(clone);
}

// Set initial position
const cardWidth = track.querySelector('.cards').offsetWidth;
track.style.transform = `translateX(-${cardWidth * index}px)`;

// Move function
function moveToIndex(newIndex) {
  if (isTransitioning) return;
  isTransitioning = true;
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${cardWidth * newIndex}px)`;
  index = newIndex;
}

// After transition, reset if at cloned edges
track.addEventListener('transitionend', () => {
  track.style.transition = 'none';
  if (index >= cardCount + visibleCards) {
    index = visibleCards;
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  } else if (index <= 0) {
    index = cardCount;
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  }
  isTransitioning = false;
});

// Controls
nextBtn.addEventListener('click', () => moveToIndex(index + 1));
prevBtn.addEventListener('click', () => moveToIndex(index - 1));

// Auto scroll
setInterval(() => {
  moveToIndex(index + 1);
}, 4000);
