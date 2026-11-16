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

const quickContact = document.createElement("nav");
quickContact.className = "quick-contact-actions";
quickContact.setAttribute("aria-label", "Quick contact");
quickContact.innerHTML = `
  <a class="quick-contact-link quick-contact-whatsapp" href="https://wa.me/918329254768" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp at +91 832 925 4768">
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a9.8 9.8 0 0 0-8.5 14.7L2 22l5.5-1.4A10 10 0 1 0 12 2Zm0 17.9a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A7.9 7.9 0 1 1 12 19.9Zm4.4-5.9c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.8 3.5.5.2.9.4 1.2.5.5.2 1 .2 1.3.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z"/></svg>
    <span>WhatsApp</span>
  </a>
  <a class="quick-contact-link quick-contact-call" href="tel:+918329254768" aria-label="Call +91 832 925 4768">
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11 11 0 0 0 3.4.5 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17.8 17.8 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .5 3.4 1 1 0 0 1-.2 1Z"/></svg>
    <span>Call Now</span>
  </a>`;
document.body.append(quickContact);
