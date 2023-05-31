import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="flash"
export default class extends Controller {
  connect() {
    // Adding some animation
    this.element.style.opacity = 100;
    this.element.style.transform = "translateY(-20px)";
    this.element.style.transition = "all 0.5s ease-in-out";
    // Remove the flash message after 3 seconds
    setTimeout(() => {
      this.element.remove();
    }, 3000);
  }
  initialize() {}
}
