const topSectionHero = document.getElementById("topSectionHero") as HTMLElement;
const topSection = document.getElementById("topSection") as HTMLDivElement;
const bottomSection = document.getElementById(
  "bottomSection"
) as HTMLDivElement;

function heroSlide() {
  let mouseOn = "top:0;";
  let mouseOff = "top:-100vh;";

  topSection.addEventListener("mouseenter", () => {
    topSectionHero.setAttribute("style", mouseOn);
  });

  bottomSection.addEventListener("mouseenter", () => {
    topSectionHero.setAttribute("style", mouseOff);
  });
}

heroSlide();
