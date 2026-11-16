const navigationToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.getElementById("ajay-primary-nav");

if (navigationToggle && primaryNavigation) {
  navigationToggle.addEventListener("click", () => {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigationToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    primaryNavigation.classList.toggle("is-open", !isExpanded);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navigationToggle.setAttribute("aria-expanded", "false");
      navigationToggle.setAttribute("aria-label", "Open navigation menu");
      primaryNavigation.classList.remove("is-open");
    }
  });
}
