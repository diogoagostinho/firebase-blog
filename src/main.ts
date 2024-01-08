var posts = document.getElementsByClassName("post");
var topSectionHero = document.getElementsByClassName("top-section_hero");
const topSection = document.getElementById("topSection") as HTMLDivElement;
const bottomSection = document.getElementById(
  "bottomSection"
) as HTMLDivElement;

// Hero Slide Function

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

// Post Hover Function

function postHover() {
  for (var i = 0; i < posts.length; i++) {
    const post = posts[i];

    post.addEventListener("mouseenter", () => {
      const postImage = Array.from(post.getElementsByClassName("user_image"));
      const postButtons = Array.from(
        post.getElementsByClassName("post_button")
      );
      const postHrs = Array.from(post.getElementsByClassName("post_hr"));
      const postText = Array.from(post.getElementsByClassName("post_text"));

      postImage.forEach((j) => {
        j.setAttribute("style", "transform: scale(1.1); filter: none;");
      });

      postButtons.forEach((j) => {
        j.setAttribute(
          "style",
          "border-color: var(--theme-action); color: var(--theme-action)"
        );

        j.addEventListener("mouseenter", () => {
          j.setAttribute("style", "color: var(--theme-button-text);");
        });

        j.addEventListener("mouseleave", () => {
          j.setAttribute(
            "style",
            "color: var(--theme-action); border-color: var(--theme-action);"
          );
        });
      });

      postHrs.forEach((j) => {
        j.setAttribute("style", "opacity: 1; transform: scale(1.03);");
      });

      postText.forEach((j) => {
        j.setAttribute(
          "style",
          "color: var(--theme-action); text-decoration-color: var(--theme-action)"
        );
      });
    });

    post.addEventListener("mouseleave", () => {
      const postImage = Array.from(post.getElementsByClassName("user_image"));
      const postButtons = Array.from(
        post.getElementsByClassName("post_button")
      );
      const postHrs = Array.from(post.getElementsByClassName("post_hr"));
      const postText = Array.from(post.getElementsByClassName("post_text"));

      postImage.forEach((j) => {
        j.setAttribute("style", "transform: none; filter: grayscale(100%);");
      });

      postButtons.forEach((j) => {
        j.setAttribute("style", "border: var(--theme-button);");
      });

      postHrs.forEach((j) => {
        j.setAttribute("style", "opacity: 0; transform: none;");
      });

      postText.forEach((j) => {
        j.setAttribute(
          "style",
          "color: var(--theme-text); text-decoration-color: var(--theme-text)"
        );
      });
    });
  }
}

postHover();

// The Switch Functions

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "public/moon.svg" : "public/sun.svg";
  buttonEl.setAttribute("src", newCta);
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});
