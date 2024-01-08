var topSectionHero = document.getElementsByClassName("top-section_hero");
const topSection = document.getElementById("topSection") as HTMLDivElement;
const bottomSection = document.getElementById(
  "bottomSection"
) as HTMLDivElement;

function heroSlide() {
  let mouseOn = "top:0;";
  let mouseOff = "top:-150vh;";

  topSection.addEventListener("mouseenter", () => {
    for (var i = 0; i < topSectionHero.length; i++) {
      topSectionHero.item(i)?.setAttribute("style", mouseOn);
    }
  });

  bottomSection.addEventListener("mouseenter", () => {
    for (var i = 0; i < topSectionHero.length; i++) {
      topSectionHero.item(i)?.setAttribute("style", mouseOff);
    }
  });
}

heroSlide();
