import { Controller } from "@hotwired/stimulus";
// import debounce
import debounce from "debounce";
// Connects to data-controller="form"
export default class extends Controller {
  initialize() {
    this.submit = debounce(this.submit.bind(this), 500);
    console.log("Hello, Stimulus!", this.element);
  }
  submit() {
    this.element.requestSubmit();
  }
}
