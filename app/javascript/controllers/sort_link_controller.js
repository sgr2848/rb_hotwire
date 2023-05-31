import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="sort-link"
export default class extends Controller {
  static targets = ["sort", "direction"];
  connect() {}
  updateForm(event) {
    let searchParams = new URL(event.detail.url).searchParams;
    document.getElementById("sort").value = searchParams.get("sort");
    document.getElementById("direction").value = searchParams.get("direction");
  }
}
