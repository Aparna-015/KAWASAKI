


const img_array = [
  "photos/24KLX232A_171GN1DRF3CG_A-removebg-preview.png",
  "photos/24EX500G_242BK1DRF3CG_A-removebg-preview.png"
];

const imgContainer = document.getElementById("img_container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateSlider() {
  imgContainer.innerHTML = `
    <img src="${img_array[currentIndex]}" class="w-full h-auto rounded-lg" alt="Slide ${currentIndex + 1}" />
  `;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + img_array.length) % img_array.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % img_array.length;
  updateSlider();
});

updateSlider();

setInterval(() => {
  currentIndex = (currentIndex + 1) % img_array.length;
  updateSlider();
}, 3000);








